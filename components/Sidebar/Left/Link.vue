<template>
    <!-- left side bar child link component   -->
    <NuxtLink
        :to="href"
        :aria-label="title"
        class="transition ease-in-out duration-250 flex items-center py-2 px-3 rounded-full dark:text-white text-black w-min hover:bg-gray-200 dark:hover:bg-cackle-200"
    >
        <div class="w-6 h-6" v-if="icon || activeIcon">
            <!-- active icon state  -->
            <component
                :is="isActive == true ? activeIcon : icon"
                class="transition ease-in-out duration-250 underline"
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
// current page route
const route = useRoute();

// function to check if current link is active
let isActive;
onMounted(() => {
    isActive = computed(() => {
        // if not there 
        if(props.activeURL == null || props.activeURL == undefined) return;

        // check 
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
        required: false,
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
        required: false,
    },
});
</script>
