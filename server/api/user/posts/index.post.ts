// imports
import formidable from "formidable";
import { createMediaFile, createPost } from "~~/server/database/posts";

// handler
export default defineEventHandler(async (e) => {
    // form
    const form = formidable({ multiples: true });

    // parse
    const parsedForm = await new Promise((resolve, reject) => {
        // parse
        form.parse(e.req, (err, fields, files) => {
            // err
            if (err) reject(err);

            // success
            resolve({ fields, files });
        });
    });

    // data
    const { fields, files }: any = parsedForm;

    // user ID 
    let userID = e.context?.auth?.user?.id;

    // post data 
    const postData = {
        text: fields.content,
        authorID: userID,
    }

    // TODO: REPLY 

    // create tweet 
    const post = await createPost(postData);

    // files upload 
    const allFilesUploadPromises = Object.keys(files).map((key) => {
        // file 
        let file = files[key];

        // TODO: upload to cloudinary

        // create db file 
        return createMediaFile({
            postId: post.id,
            userId: userID,
        })
    });

    // init 
    Promise.all(allFilesUploadPromises)

    // return 
    return { post }
});
