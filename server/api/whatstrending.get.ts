// type
import type { trendItem } from "~~/types";

// handler
export default defineEventHandler(async (e) => {
    // TODO : get data from db
    const response: trendItem[] = [
        {
            title: "John Doe",
            total: "55K",
        },
    ];

    // return data
    return response;
});
