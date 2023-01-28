import { Head } from "@zhead/schema";
import { headDataParams } from "~~/types";
export default function useMetaHelper(params: headDataParams) {
  
  function getHeadData({
    title = 'Home',
    description = 'working? x2',
  }: headDataParams): Head {
    return {
      title: title,
      // meta tags 
      meta: [
        // standard tags 
        { name: 'description', content: description },
        { name: 'theme-color', content: '#307af2' },
        { name: 'msapplication-TileColor', content: '#307af2' },


        // og tags 
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: title },
        { name: 'og:description', content: description },
        { name: 'og:image', content: 'icon.png' },

        // twitter tags 
        { name: 'twitter:card', content: 'app' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: 'icon.png' },
      ],
    }
  }
  
  return getHeadData(params)
}

