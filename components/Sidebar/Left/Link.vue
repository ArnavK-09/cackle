<template>
  <NuxtLink :to="href" :class="defaultTransition"
    class="flex items-center py-2 px-3 rounded-full dark:text-white text-black w-min hover:bg-gray-200 dark:hover:bg-cackle-200">
    <div class="w-6 h-6" v-if="icon || activeIcon">
      <component :is="active == true ? activeIcon : icon" />
    </div>

    <div class="lg:block ml-2 text-lg hidden select-none" :class="textActiveClass">
      {{ title }}
    </div>
  </NuxtLink>
</template>

<script setup>
const { defaultTransition } = useTailwindTheme();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    required: false
  },
  activeIcon: {
    required: false
  },
  href: {
    type: String,
    default: '/'
  }
});
const textActiveClass = computed(() =>
  props.active ? "font-semibold" : "font-thin"
);
</script>
