<template>
    <div
        class="overflow-hidden m-2 mb-3 rounded-3xl border bg-gray-50 dark:bg-cackle-700 border-white-200 dark:border-gray-700 transition ease-in-out duration-250"
    >
        <!-- heading  -->
        <h1
            class="transition ease-in-out duration-250 border-white-200 dark:border-gray-700 select-none px-3 py-4 border-b font-extrabold tracking-wide cursor-grab text-gray-900 dark:text-white overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300"
        >
            {{ heading }} 
        </h1>

        <!-- card item  -->
        <div class="transition ease-in-out duration-250">
            <slot />
        </div>

        <!-- more link  -->
        <div
            class="transition ease-in-out duration-250 border-white-200 dark:border-gray-700 text-center border-t border overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300"
        >
            <NuxtLink
                class="select-none my-3 text-sm px-2 text-cackle-500 font-thin hover:underline"
                :to="seeMoreHref"
                >See More...
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
// props 
const props = defineProps({
    heading: {
        type: String,
        required: true,
    },
    seeMoreHref: {
        type: String,
        required: false,
        default: "/",
    },
});
</script>
