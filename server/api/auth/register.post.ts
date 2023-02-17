// imports
import { createUser } from "~~/server/database/auth";
import {H3Error } from 'h3';

// types 
import type { UserInfo } from "~~/types/backend/user";
import type { H3Event } from "h3";
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime";

// handle event
export default defineEventHandler(async (e: H3Event) => {

    /*Getting Body*/

    // getting body content
    const Body = await readBody(e);

    // validating body 
    if (!Body) {
        throw createError({
            statusCode: 400,
            statusMessage: "Empty Body",
        });
    }

    // extracting data
    const { username, email, password, name }: UserInfo = Body;

    // checking for missing info
    if (!username || !email || !password || !name || username.trim() == '') {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing Params!",
        });
    }

    // final data
    let finalData: UserInfo = {
        username: username.trim().replace(' ', "_").toLowerCase().replace('-', '_'),
        email,
        password,
        name: name.trim(),
        pfp: "https://picsum.photos/200/200",
    };

    /*Validation*/

    // email check 
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(finalData.email)) {
        return sendError(e, createError({ statusCode: 400, statusMessage: 'email do not match' }))
    }
    // password limit check 
    if(finalData.password.length < 7|| finalData.password.length > 19) {
        throw createError({
            statusCode: 400,
            statusMessage: "Password must be at least 8 characters and more than 20 characters",
        })
    }
    // username validate 
    if(finalData.username.length > 12 || finalData.username.length < 3) {
        throw createError({
            statusCode: 400,
            statusMessage: "Username must be at least 4 characters and more than 12 characters",
        })
    }
    // name validate 
    if(finalData.name.length > 12 || finalData.name.length < 4) {
        throw createError({
            statusCode: 400,
            statusMessage: "Username must be at least 4 characters and more than 12 characters",
        })
    }


    /*Returing Response*/

    // creating user 
    let res = await createUser(finalData)
    .catch((error: PrismaClientKnownRequestError) => {
        if(error.code == "P2002") {
            return createError({
                statusCode: 500,
                statusMessage: "Username/E-mail already exists!",
            });
        } else {
            return createError({
                statusCode: 500,
                statusMessage: "Some error occured ",
            });
        }
        
    });

    // returning data 
    return res;
});
