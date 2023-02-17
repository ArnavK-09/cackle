// type
import type { trendItem } from "~~/types";

// handler
export default defineEventHandler((e) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: trendItem[] = [
                {
                    title: "John Doe",
                    total: "55K",
                },
            ];
            return response;
        } catch (error) {
            reject(error);
        }
    });
});
