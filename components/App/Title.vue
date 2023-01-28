<template>
    <div
        class="sticky top-0 px-4 py-3 bg-white/50 backdrop-blur-sm dark:bg-transparent"
    >
        <!-- in build theme changer for small devices  -->
        <h2
            @click.prevent="useDevice().isMobileOrTablet ? $toggleTheme : null"
            class="capitalize select-none text-center md:text-left text-xl font-bold text-gray-800 dark:text-gray-100"
        >
            {{ title }}
        </h2>

        <!-- search bar for mobiles  -->
        <SidebarRightSearch class="block md:hidden" />
    </div>
</template>

<script setup>
// defining props for component
defineProps({
    title: {
        required: true,
        type: String,
    },
});
</script>
