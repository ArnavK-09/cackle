<template>
  <main>
    <div class="bg-white dark:bg-cackle-900">
      <!-- Loading screen  -->
      <div v-if="!isUserLoggedIn" class="h-screen w-screen flex items-center justify-center">
          <HandleLoading :size="20"/>
      </div>

      <!-- app view  -->
      <section v-else>
        <div class="grid grid-cols-12 mx-auto lg:max-w-7xl lg:px-9 lg:gap-4">

          <!-- left side bar  -->
          <div class="md:block md:col-span-1 xl:col-span-2 xs:col-span-1 z-10">
            <div class="top-0 sticky">
              <SidebarLeft />
            </div>
          </div>

          <!-- page view  -->
          <div class="col-span-11 ml-3  md:mx-3 lg:ml-10 lg:col-span-8 md:col-span-8 xl:col-span-7 ">
            <AppTitle :title="route.path.split('/')[1].trim() == '' ? 'Home' : route.path.split('/')[1]" />
            <NuxtLoadingIndicator :height="5"
              color="linear-gradient(90deg, rgba(95,153,247,1) 0%, rgba(9,9,121,1) 35%, rgba(95,153,247,1) 100%)" />
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
// temperory 
const isUserLoggedIn = ref(true);
const route = useRoute() 
</script>

