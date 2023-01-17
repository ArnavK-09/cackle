<template>
    <section class="error_occured p-5 bg-red-700/40">
    <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400 shadow-lg"
        role="alert">
        <div class="flex-shrink-0 inline w-6 h-6 mr-2" ><ShieldExclamationIcon /></div>
        <span class="sr-only">Error</span>
        <div>
            <span class="font-medium normal-case">Error Loading This Component, The Reason Of This Error:</span>
            <ul class="mt-1.5 ml-4 list-disc list-inside">
                <li>{{ error }}</li>
            </ul>
        </div>
    </div>
</section>
</template>
<script setup>
import { ShieldExclamationIcon } from '@heroicons/vue/24/outline';
defineProps({
    error: {
        required: false
    }
})
</script>