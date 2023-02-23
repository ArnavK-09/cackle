// type
import type { lbUser } from "~~/types";

// handler
export default defineEventHandler((e) => {
    // TODO: GET data from db
    const response: lbUser[] = [
        {
            name: "John Doe",
            username: "username",
            img: "https://picsum.photos/200/200",
        },
    ];

    // return response
    return response;
});
