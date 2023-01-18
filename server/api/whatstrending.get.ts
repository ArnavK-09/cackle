export default defineEventHandler((e) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = [{
        title: '#Cackle',
        total: '545.6K'
      }, {
        title: 'Cackle Under Development',
        total: '55.3K'
      }]
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

})
