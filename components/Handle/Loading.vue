<template>
    <section id="loading_spinner">
        <div class="w-7 h-7 text-black dark:text-white animate-spin ">
            <ClockIcon /> 
        </div>
    </section>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
</script>