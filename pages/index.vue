<template>
    <h1 class="text-cackle-300 dark:text-white">Index</h1>
    <section class="text-cackle-300 dark:text-white">
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>