export default defineNuxtPlugin(() => {
    const colorMode = useColorMode()
    return {
      provide: {
        toggleTheme: () => {
            if(colorMode.preference == 'light') {
                colorMode.preference = 'dark';
            } else {
                colorMode.preference = 'light'
            }
        }
      }
    }
  })
  