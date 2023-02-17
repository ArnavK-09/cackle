// imports
import { prisma as db } from "./";
import bcrypt from "bcrypt";

// type
import type { UserInfo } from "~~/types/backend/user";

/* USERS */

// create user
function createUser(userInfo: UserInfo) {
    return db.user.create({
        data: {
            ...userInfo,
            password: bcrypt.hashSync(userInfo.password, 10),
        },
    });
}

// get user by username
function getUserByUsername(name: string) {
    return db.user.findUnique({
        where: {
            username: name,
        },
    });
}

// get user by id
function getUserByID(id: string) {
    return db.user.findUnique({
        where: {
            id: id,
        },
    });
}

/* TOKENS */
// adding refresh token to db
function createRefreshToken({
    token,
    userID,
}: {
    token: string;
    userID: string;
}) {
    return db.refreshToken.create({
        data: {
            token: token,
            userId: userID,
        },
    });
}

// get refresh token
function getRefreshToken(token: string) {
    return db.refreshToken.findUnique({
        where: {
            token: token,
        },
    });
}

// delete ookie from db 
function deleteRefreshToken(token: string) {
    return db.refreshToken.delete({
        where: {
            token: token,
        },
    })
}

// exporting
export {
    createUser,
    getUserByUsername,
    getUserByID,
    createRefreshToken,
    getRefreshToken,
    deleteRefreshToken
};
