// imports
import { createUser } from "~~/server/database/auth";
import { UserInfo } from "~~/types/user";

// handle event
export default defineEventHandler(async (e) => {
    // getting body content
    const Body = await readBody(e);

    // extracting data
    const { username, email, password, name }: UserInfo = Body;

    // checking for missing info
    if (!username || !email || !password || !name) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing Params!",
        });
    }

    // final data
    let finalData: UserInfo = {
        username,
        email,
        password,
        name,
        pfp: "https://picsum.photos/200/200",
    };

    await createUser(finalData)
        .then((res) => {
            return {
                body: res,
            };
        })
        .catch((error) => {
            console.warn(error);
            // return createError({
            //     statusCode: 500,
            //     statusMessage: "wtf",
            // });
        });

    // try {
    //     // creating user
    //     let user = await createUser(finalData);

    //     // returning data
    //     return {
    //         body: user,
    //     };
    // } catch (error: any) {
    //     console.log(error)
    //     throw createError({
    //         statusCode: 500,
    //         statusMessage: 'Error Occured',
    //     });
    // }
});
