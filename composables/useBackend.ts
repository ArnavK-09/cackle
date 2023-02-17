// imports
import type { lbUser, trendItem } from "../types";

// composable
export default function () {
    const getTrending = () => {
        // promise
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useApi<trendItem>("whatstrending", {
                    method: "GET",
                });

                resolve(response);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getLeaderboard = () => {
        // promise
        return new Promise(async (resolve, reject) => {
            await useApi<lbUser>("leaderboard")
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    };

    // returning
    return {
        getTrending,
        getLeaderboard,
    };
}
