<template>
  <NuxtLink :to="href" :class="defaultTransition"
    class="flex items-center py-2 px-3 rounded-full dark:text-white text-black w-min hover:bg-gray-200 dark:hover:bg-cackle-200">
    <div class="w-6 h-6" v-if="icon || activeIcon">
      <component :is="isActive == true ? activeIcon : icon" />
    </div>

    <div class="lg:block ml-2 text-lg hidden select-none" :class='isActive ? "font-semibold" : "font-thin"'>
      {{ title }} <span class="hidden text-xs">{{ icn }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const { defaultTransition } = useTailwindTheme();
const route = useRoute()
let isActive;
onMounted(() => {
  isActive = computed(() => {
    if(route.path !== '/' && route.path.includes(props.activeURL)) {
      return route.path.includes(props.activeURL)
    } else {
      return true
    }
  });
})


const props = defineProps({
  activeURL: {
    type: String,
    required: true
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

</script>
