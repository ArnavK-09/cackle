export default defineEventHandler((e) => {
  
    // return [{
    //     title: '#Cackle',
    //     total: '545K'
    //   }]
    return new Promise(async (resolve, reject) => {
      try {
          const response = [{
               title: '#Cackle',
                total: '545.6K'
             }]
             setTimeout(() => {
               resolve(response)
              
             }, 1000*3);
      } catch (error) {
          reject(error)
      }
  })

  })
  