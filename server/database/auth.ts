// imports
import { prisma as db } from "./";
import bcrypt from "bcrypt";

// type
import type { UserInfo } from "~~/types/user";

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
function getUserById(id: string) {
    return db.user.findUnique({
        where: {
            id: id,
        },
    });
}

// exporting
export { createUser, getUserByUsername, getUserById };
