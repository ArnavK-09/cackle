<template>
    <div class="sticky top-0 px-4 drop-shadow-md py-3 bg-white/80 backdrop-blur-sm dark:bg-transparent">
        <h2 class="capitalize  text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
    </div>
</template>

<script setup>
defineProps({
    title: {
        required: true,
        type: String,
    }
})
</script>