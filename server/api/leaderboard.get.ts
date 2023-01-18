export default defineEventHandler((e) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = [{
        name: 'John Doe',
        username: 'username',
        img: 'https://picsum.photos/200/200'
      }]
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

})
