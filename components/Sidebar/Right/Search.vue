<template>
    <section class="search m-2 mb-3 dark:hover:brightness-125">
        <div class="relative m-2">
            <form @submit.prevent="handleSearchQuery">
                <div class="absolute flex items-center h-full pl-5">
                    <div class="w-5 h-5 text-gray-600">
                        <MagnifyingGlassIcon @click="handleSearchQuery" />
                    </div>
                </div>
                <input v-model="searchQuery"
                    class="flex items-center w-full pl-12 placeholder:font-thin font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-cackle-400 dark:border-cackle-400 focus:bg-gray-100 dark:focus:bg-cackle-900 focus:outline-none focus:border focus:border-blue-200 h-9 placeholder:select-none"
                    placeholder="Search Cackle..." type="text">

            </form>
        </div>
    </section>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
const searchQuery = ref('')
const handleSearchQuery = () => {
    alert(searchQuery)
}
</script>