<template>
  <main>
    <div class="bg-white dark:bg-cackle-900">
      <!-- Loading screen  -->
      <span v-if="isUserLoggedIn">Loading</span>

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
            <AppTitle :title="route.path.split('/')[1].trim() == '' ? 'Home' : route.path.split('/')[1]"/>
            <NuxtLoadingIndicator :height="5" :color="loaderColor"/> 
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
const isUserLoggedIn = ref(false);
const route = useRoute()
const colorMode = useColorMode()
const loaderColor = computed(() => {
  if(colorMode.preference == 'dark') {
    return '#ffffff'
  } else {
    return '#5F99F7'
  }
}); 
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
