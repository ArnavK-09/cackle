<template>
  <main>
    <div class="bg-white dark:bg-cackle-900">
      <!-- Loading screen  -->
      <span v-if="isUserLoggedIn">Loading</span>

      <!-- app view  -->
      <section v-else>
        <div class="grid grid-cols-12 mx-auto lg:max-w-7xl lg:px-9 lg:gap-4">
          
          <!-- left side bar  -->
          <div class="md:block xl:col-span-2 xs:col-span-1 z-10">
            <div class="top-0 sticky">
              <SidebarLeft />
            </div>
          </div>

          <!-- page view  -->
          <div class="col-span-10 mx-3 md:col-span-8 xl:col-span-6">
            <AppTitle :title="route.path.split('/')[1].trim() == '' ? 'Home' : route.path.split('/')[1]"/>
            <NuxtLoadingIndicator :height="5" color="#5F99F7"/> 
            <NuxtPage />
          </div>

          <!-- right side bar  -->
          <div v-if="device.isDesktopOrTablet" class="col-span-10 md:block xl:col-span-4 md:col-span-3">
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
const device = useDevice()
const route = useRoute()
</script>
