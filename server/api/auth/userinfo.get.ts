// imports
import jwt_decode from "jwt-decode";
import { getUserByID } from "~~/server/database/auth";

// type
import type { JwtPayload } from "jwt-decode";

// custom type
interface JwtPayLoadWithToken extends JwtPayload {
    id: string;
}

// handler
export default defineEventHandler(async (e) => {
    // get token
    let token = e.req.headers.authorization.split(" ")[1] || null;
    // decode token
    const decodedToken = jwt_decode<JwtPayLoadWithToken>(token);

    // user ID
    let userID = decodedToken.id;

    // get user
    let user = await getUserByID(userID).catch(() => {
        throw createError({
            statusCode: 400,
            statusMessage: "User Not Found",
        });
    });

    // return response
    return user;
});
