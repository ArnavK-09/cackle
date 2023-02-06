// imports
import JWT from "jsonwebtoken";

// types
import type { LoginUserWithID } from "~~/types/backend";
import type { H3Event } from "h3";

// getting jwt config
const config = useRuntimeConfig();

// getting jwt config secrets
const accessTokenSecret = config.jwtAccessTokenSecret;
const refreshTokenSecret = config.jwtRefreshTokenSecret;

/* Access Token */
// create access token
const createAcessToken = (user: LoginUserWithID) => {
    // payload & options
    const payload = {
        id: user.id,
    };
    const options = {
        expiresIn: "1d",
    };

    // sign & return
    return JWT.sign(payload, accessTokenSecret, options);
};

// decode acess token
const decodeAcessToken = (token: string) => {
    // validating token
    try {
        return JWT.verify(token, accessTokenSecret);
    } catch (error) {
        return null;
    }
};

/* Refresh Token */
// create refresh token
const createRefreshToken = (user: LoginUserWithID) => {
    // payload & options
    const payload = {
        id: user.id,
    };
    const options = {
        expiresIn: "10d",
    };

    // sign & return
    return JWT.sign(payload, refreshTokenSecret, options);
};

// decode refresh token
const decodeRefreshToken = (token: string) => {
    // validating
    try {
        return JWT.verify(token, refreshTokenSecret);
    } catch (error) {
        return null;
    }
};

/* Shared */
// get both access & refresh tokens
const getAllTokens = (user: LoginUserWithID) => {
    return {
        accessToken: createAcessToken(user),
        refreshToken: createRefreshToken(user),
    };
};

// setting up cookie for resfresh token
const setupRefreshTokenCookie = (e: H3Event, token: string) => {
    // set cookie
    setCookie(e, "refreshToken", token, {
        httpOnly: true,
        sameSite: true,
    });
};

// exorting
export {
    createAcessToken,
    decodeAcessToken,
    createRefreshToken,
    decodeRefreshToken,
    getAllTokens,
    setupRefreshTokenCookie,
};
