// imports
import bcrypt from "bcrypt";
import { getAllTokens, setupRefreshTokenCookie } from "~~/server/helpers/jwt";
import { getUserByUsername, createRefreshToken } from "~~/server/database/auth";

// types
import type { LoginUser, LoginUserWithID, CackleUser } from "~~/types/backend";
import type { H3Event } from "h3";

// handler
export default defineEventHandler(async (e: H3Event) => {
    /* Validating Body */
    // getting body content
    const Body = await readBody(e);

    // validating body
    if (!Body) {
        throw createError({
            statusCode: 400,
            statusMessage: "Empty Body",
        });
    }

    // extracting Data
    const { username, password }: LoginUser = Body;

    // checking for missing info
    if (
        !username ||
        !password ||
        username.trim() == "" ||
        password.trim() == ""
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing Params!",
        });
    }

    /* getting User */
    const db_user: CackleUser = await getUserByUsername(username);

    // if no user
    if (!db_user) {
        throw createError({
            statusCode: 400,
            statusMessage: "Username Or Pass invalid",
        });
    }

    // custom 
    const user: LoginUserWithID = {
        id: db_user.id,
        username: db_user.username,
        password: db_user.password,
    };

    /* Checking Pass */
    const PassValid = bcrypt.compare(password, user.password);

    // if not valid
    if (!PassValid) {
        throw createError({
            statusCode: 400,
            statusMessage: "Username Or Pass invalid",
        });
    }

    /* Creating Tokens */
    const userTokens = getAllTokens(user);

    // adding token to db 
    await createRefreshToken({
        token: userTokens.refreshToken,
        userID: user.id
    })

    // adding cookie
    setupRefreshTokenCookie(e, userTokens.refreshToken);

    // returning access token
    return {
        access_token: userTokens.accessToken,
        test: userTokens.refreshToken,
        user: user,
    };
});
