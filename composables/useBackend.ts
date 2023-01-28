// imports 
import type { lbUser } from "../types";


export default function() {
    const getTrending = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useApi('whatstrending', {
                    method: 'GET',
                })
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getLeaderboard = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useApi('leaderboard', {
                    method: 'GET',
                }) as lbUser;

                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    // returning 
    return {
        getTrending, getLeaderboard
    }
}