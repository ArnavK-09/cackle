<template>
    <div class="p-2  cursor-pointer overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300">
        <h2 class="font-semibold text-gray-800 text-md dark:text-white">{{ title }}</h2>
        <p class="text-sm font-thin text-gray-500">{{ subtitle }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '...'
    }
})
</script>