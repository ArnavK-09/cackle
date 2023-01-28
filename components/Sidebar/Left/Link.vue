<template>
    <!-- left side bar child link component   -->
    <NuxtLink
        :to="href"
        :class="defaultTransition"
        :aria-label="title"
        class="flex items-center py-2 px-3 rounded-full dark:text-white text-black w-min hover:bg-gray-200 dark:hover:bg-cackle-200"
    >
        <div class="w-6 h-6" v-if="icon || activeIcon">
            <!-- active icon state  -->
            <component
                :is="isActive == true ? activeIcon : icon"
                :class="defaultTransition"
            />
        </div>

        <!-- title for bigger screens  -->
        <div
            class="lg:block ml-2 text-lg hidden select-none"
            :class="isActive ? 'font-semibold' : 'font-thin'"
        >
            {{ title }}
        </div>
    </NuxtLink>
</template>

<script setup>
// theme transitions
const { defaultTransition } = useAppConfig().theme;

// current page route
const route = useRoute();

// function to check if current link is active
let isActive;
onMounted(() => {
    isActive = computed(() => {
        if (
            props.activeURL !== "/" &&
            route.path.replace("/", "").includes(props.activeURL)
        ) {
            return route.path.includes(props.activeURL);
        } else if (
            route.path.replace("/", "") == "" &&
            props.activeURL === "/"
        ) {
            return true;
        } else {
            return false;
        }
    });
});

// props
const props = defineProps({
    activeURL: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    icon: {
        required: false,
    },
    activeIcon: {
        required: false,
    },
    href: {
        type: String,
        default: "/",
    },
});
</script>
