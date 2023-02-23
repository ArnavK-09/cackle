<template>
    <main>
        <div class="bg-white dark:bg-cackle-900">
            <!-- loading screen  -->
            <div
                v-if="isAuthLoading"
                class="h-screen w-screen flex justify-center items-center"
            >
                <HandleLoading />
            </div>

            <!-- app view  -->
            <section v-else>
                <!-- auth screen  -->
                <Teleport to="body" v-if="!currentUser">
                    <LazyClientOnly>
                        <div
                            class="h-screen w-screen flex items-center justify-center bg-transparent backdrop-blur-md z-20 fixed top-0"
                        >
                            <AuthForm />
                        </div>
                    </LazyClientOnly>
                </Teleport>

                <!-- content  -->
                <div
                    class="grid grid-cols-12 mx-auto lg:max-w-7xl lg:px-9 lg:gap-4"
                >
                    <!-- left side bar  -->
                    <div
                        class="md:block md:col-span-1 xl:col-span-2 xs:col-span-1 z-10"
                    >
                        <div class="top-0 sticky">
                            <SidebarLeft />
                        </div>
                    </div>

                    <!-- page view  -->
                    <div
                        class="col-span-11 ml-3 md:mx-3 lg:ml-10 lg:col-span-8 md:col-span-8 xl:col-span-7"
                    >
                        <AppTitle
                            :title="
                                route.path.split('/')[1].trim() == ''
                                    ? 'Home'
                                    : route.path.split('/')[1]
                            "
                        />
                        <NuxtLoadingIndicator
                            :height="5"
                            color="linear-gradient(90deg, rgba(95,153,247,1) 0%, rgba(9,9,121,1) 35%, rgba(95,153,247,1) 100%)"
                        />
                        <NuxtPage />
                    </div>

                    <!-- right side bar  -->
                    <div class="hidden md:block xl:col-span-3 md:col-span-3">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
// route
const route = useRoute();

// imports for auth
const { isAuthLoading, getAuthUser, implementAuthentication } = useAuth();

// variables
const currentUser = getAuthUser;

// init auth
onBeforeMount(() => {
    // implmenet
    implementAuthentication();
});

// meta tags
useHead(
    useMetaHelper({
        title: currentUser.value
            ? "Explore Cackle, Meet People"
            : "Explore Cackle, Meet People, Register Now!",
    })
);
</script>
