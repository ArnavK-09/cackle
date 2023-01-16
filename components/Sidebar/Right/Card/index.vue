<template>
    <div class="overflow-hidden m-2 mb-3 rounded-3xl border bg-gray-50 dark:bg-cackle-700"
        :class="[defaultTransition, defaultBorderColor]">

        <!-- heading  -->
        <h1 :class="[defaultTransition, defaultBorderColor]"
            class="select-none px-3 py-4 border-b font-extrabold cursor-grab text-gray-900 dark:text-white overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300">
            {{ heading }}
        </h1>

        <!-- card item  -->
        <div :class="defaultTransition">
            <slot />
        </div>

        <!-- more link  -->
        <div :class="[defaultTransition, defaultBorderColor]" class="text-center border-t border overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300">
            <NuxtLink class="select-none my-3 text-sm px-2 text-cackle-500 font-thin hover:underline" to="#">See More...
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>
const { defaultTransition, defaultBorderColor } = useTailwindTheme();
const props = defineProps({
    heading: {
        type: String,
        required: true,
    }
})
</script>