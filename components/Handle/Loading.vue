<template>
    <section id="loading_spinner">
        <div :class="`w-${size} h-#{size} text-black dark:text-white animate-spin `">
            <ClockIcon /> 
        </div>
    </section>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";

defineProps({
    size: {
        type: Number,
        required: false,
        default: 7
    }
})
</script>