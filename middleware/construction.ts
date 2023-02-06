// for pages not created yet
export default defineNuxtRouteMiddleware(() => {
    console.log('here')
    // return to contruction page
    navigateTo({
        path: "/under-contruction",
    });
});
