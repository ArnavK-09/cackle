<template>
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-sm dark:bg-transparent">
        <h2 class="capitalize text-center md:text-left text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
        <SidebarRightSearch class="block md:hidden"/>
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
