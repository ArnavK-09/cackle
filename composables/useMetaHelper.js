export default function useMetaHelper(params) {

  // function getSeoData({
  //   title = 'Cackle',
  //   description = 'Cackle description',
  //   image = null
  // }) {
  //   return {
  //     title: title + ' | Cackle App',
  //     ogTitle: title + ' | Cackle App',
  //     description: description,
  //     ogDescription: description,
  //     ogImage: image,
  //     twitterCard: 'summary_large_image',
  //   }
  // }
  
  function getHeadData({
    title = 'Home',
    description = 'Cackle description head',
  }) {
    return {
      title: title,
      description: description,
      meta: [
        { name: 'description', content: description }
      ],
    }
  }
  
  return getHeadData(params)
}

