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

    // returning 
    return {
        getTrending
    }
}