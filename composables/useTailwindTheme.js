export default function () {
    
    const toggleTheme = () => {
        const colorMode = useColorMode()
        if(colorMode.preference == 'light') {
            colorMode.preference = 'dark';
        } else {
            colorMode.preference = 'light'
        }
    }
    return {
        toggleTheme,
        defaultTransition: ' transition ease-in-out duration-250',
        defaultBorderColor: ' border-white-200 dark:border-gray-700',
    }
}