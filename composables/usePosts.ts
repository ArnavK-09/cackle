// imports

// composble
export function usePosts() {
    // create post
    const createPost = async (data: any) => {
        // form data
        const form = new FormData();

        // append data
        form.append("title", data.title);
        form.append("content", data.content);
        data.files.forEach((item: any, i: number) => {
            form.append("file_" + i, item);
        });
        console.log("heree")
        // return response
        return await useApi("/user/posts", {
            method: "POST",
            body: form
        });
    };

    // get all posts
    const getAllPosts = async () => {
        // promise
        return new Promise((resolve, reject) => {
            try {
                // fetch
                const res = useApi("/posts", {
                    method: "GET",
                });

                resolve(res);
            } catch (e) {
                // err
                reject(e);
            }
        });
    };

    // get post by id
    const getPostByID = (id: string) => {
        // promise
        return new Promise((resolve, reject) => {
            try {
                // fetch
                const res = useApi(`/posts/${id}`);

                // resolve
                resolve(res);
            } catch (e) {
                // err
                reject(e);
            }
        });
    };

    // return
    return {
        createPost,
        getAllPosts,
        getPostByID,
    };
}
