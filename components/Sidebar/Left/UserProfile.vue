<template>
    <div class="w-full mx-1 flex flex-row items-center justify-center md:px-2 py-2 md:mx-auto mt-auto mb-5 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
        :class="defaultTransition">
        <div class="flex flex-row">
            <img :src="image" class="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="User image">
            <div class="flex-col hidden ml-2 xl:block">
                <h1 class="text-sm font-semibold tracing-wide text-gray-800 dark:text-white">
                    {{ username }} 
                </h1>
                <p class="text-sm text-gray-400">
                    @{{ handle }}
                </p>
            </div>
        </div>
        <!-- ICON -->
        <div class="hidden ml-auto xl:block" @click.prevent="toggleTheme">
            <div class="w-5 h-5 text-gray-800 dark:text-white">
                <SafeSection :isLoading="$colorMode.unknown" :doCenter="false">
                <span v-if="$colorMode.value == 'dark'">
                    <MoonIcon />
                </span>
                <span v-else>
                    <SunIcon />
                </span>
            </SafeSection>
            </div>
        </div>
    </div>
</template>

<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
const { defaultTransition, toggleTheme } = useTailwindTheme();

defineProps({
    username: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

</script>