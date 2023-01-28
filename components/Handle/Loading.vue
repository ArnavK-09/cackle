<template>
    <section id="loading_spinner">
        <div
            :class="`w-${size} h-#{size} text-black dark:text-white animate-spin `"
        >
            <ClockIcon />
        </div>
    </section>
</template>

<script setup>
// clock icon for loading screen
import { ClockIcon } from "@heroicons/vue/24/outline";

// props for spinner settings
defineProps({
    size: {
        type: Number,
        required: false,
        default: 7,
    },
});
</script>
