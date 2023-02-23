// imports
import { getPostById } from "~~/server/database/posts";

// handler
export default defineEventHandler(async (e) => {
    // post id
    let postID = e.context.params;

    // data
    let fetchedData = await getPostById(postID, {
        include: {
            author: true,
            mediaFiles: true,
            replyTo: {
                include: {
                    author: true,
                },
            },
            replies: {
                include: {
                    mediaFiles: true,
                    author: true,
                    replyTo: {
                        include: {
                            author: true,
                        },
                    },
                },
            },
        },
    });

    // return
    return fetchedData;
});
