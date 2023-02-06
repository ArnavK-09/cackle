// imports
import { getCookie } from "h3";
import { getRefreshToken, getUserByID } from "~~/server/database/auth";
import { decodeRefreshToken, getAllTokens } from "~~/server/helpers/jwt";

// type
import type { H3Event } from "h3";

// handler
export default defineEventHandler(async (e: H3Event) => {
    /* Get Token & Cookie */

    // getting refresh token cookie
    const cookie = getCookie(e, "refreshtoken");
    
    // validate
    if (!cookie || cookie.trim() == "") {
        throw createError({
            statusCode: 401,
            statusMessage: "Invalid Refresh Token",
        });
    }

    // getting from db
    const dbToken = await getRefreshToken(cookie);

    // validate
    if (!dbToken) {
        throw createError({
            statusCode: 401,
            statusMessage: "Invalid Refresh Token",
        });
    }

    /* Decode */
    const decodedToken: any = decodeRefreshToken(dbToken.token);

    // getting user
    try {
        // user by id
        const user = await getUserByID(decodedToken.id);

        // new access token
        const { accessToken } = await getAllTokens(user);

        // sending response
        return {
            access_token: accessToken,
            user,
        };
    } catch (err) {
        // error
        return sendError(
            e,
            createError({
                statusCode: 500,
                statusMessage: "Error Occured",
            })
        );
    }
});
