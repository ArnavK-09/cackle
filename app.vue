<template>
  <main :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <!-- Loading screen  -->
      <span v-if="isUserLoggedIn">Loading</span>

      <!-- app view  -->
      <section v-else>
        <div class="grid grid-cols 10 mx-auto lg:max-w-7xl lg:px-9 lg:gap-4">
          <!-- left side bar  -->
          <div class="hidden md:block xl:col-span-2 xs:col-span-1">
            <div class="top-0 sticky">
              <SidebarLeft />
            </div>
          </div>

          <!-- page view  -->
          <div>
            <button @click="() => darkMode = !darkMode" class="p-3 bg-white text-black font-extrabold">Toggle Dark Mode</button>
            <NuxtPage />
          </div>

          <!-- right side bar  -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
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
  const darkMode = ref(false);
  const isUserLoggedIn = ref(false);
</script>
