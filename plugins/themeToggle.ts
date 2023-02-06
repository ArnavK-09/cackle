// toggle color theme
export default defineNuxtPlugin(() => {
    // getting color module
    const colorMode = useColorMode();

    // providing nuxt app with $toggleTheme
    return {
        provide: {
            toggleTheme: () => {
                // toggle theme logic
                if (colorMode.preference == "light") {
                    colorMode.preference = "dark";
                } else {
                    colorMode.preference = "light";
                }
            },
        },
    };
});
