// imports
import { deleteRefreshToken } from "~~/server/database/auth";
import { setupRefreshTokenCookie } from "~~/server/helpers/jwt";

// handler
export default defineEventHandler(async (e) => {
    try {
        // getting refresh token cookie
        const cookie = getCookie(e, "refreshtoken");
        console.log(cookie)
        // validate
        if (!cookie || cookie.trim() == "") {
            return createError({
                statusCode: 401,
                statusMessage: "Invalid Refresh Token",
            });
        }

        // removing / logout
        await deleteRefreshToken(cookie);
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: "Error Occured",
        });
    }

    // adding up null cookie
    setupRefreshTokenCookie(e, null);

    // returning
    return {
        message: "Logout Done!",
    };
});
