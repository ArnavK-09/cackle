// imports
import type { JwtPayload } from "jwt-decode";
import { decodeAcessToken } from "../helpers/jwt";
import { getUserByID } from "../database/auth";
// @ts-ignore
import URL_PATTERN from "url-patterns";

// custom type 
interface JwtPayLoadWithUserID extends JwtPayload {
    userId: string;
}

// middleware
export default defineEventHandler((e) => {
    /* VALIDATE */

    // enpoints
    const protectedEndpoints = ["/auth/user"];

    // is url is in endpoints
    const isURLinEndpoints = protectedEndpoints.some((item: string) => {
        // test pattern
        const Pattern = new URL_PATTERN(item);
        let result = Pattern.match(item);
        // return
        return result;
    });

    // if not
    if (!isURLinEndpoints) return;

    /* TOKEN CHECK */

    // get token
    let token = e.req.headers["authorization"].split(" ")[1];

    // decode
    let decodedToken = decodeAcessToken<JwtPayLoadWithUserID>(token);

    // if no token
    if (!decodedToken) {
        return createError({
            statusCode: 401,
            statusMessage: "Autorization failed",
        });
    }

    // get user
    try {
        let user = getUserByID(decodedToken.userId);
        e.context.authentication = { user };
    } catch (err) {
        console.log(err);
    }
});
