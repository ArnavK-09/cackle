<template>
    <div class="p-2 cursor-pointer overflow-hidden hover:bg-gray-100 dark:hover:bg-cackle-300">
        <div class="flex flex-row items-center justify-between p-1">
            <div class="flex flex-row">
                <img class="w-10 h-10 rounded-full" :src="img" :alt="name">

                <div class="flex flex-col ml-2">
                    <h1 class="font-semibold text-gray-900 dark:text-white">{{ name }}</h1>
                    <p class="text-sm text-gray-400">@{{ username }}</p>
                </div>
            </div>
            <div class="flex h-full">
                <button
                :class="defaultTransition"
                    class="px-4 border py-2 text-xs font-bold text-white bg-black rounded-full dark:bg-cackle-500 hover:bg-transparent dark:border-cackle-500 hover:border-black hover:text-black dark:hover:border-cackle-500 dark:hover:text-cackle-500 dark:hover:bg-transparent">View</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defaultTransition } = useAppConfig().theme;
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: 'https://picsum.photos/200/200'
    },
    err: {
        default: {status: false, message: 'BUG'},
        required: false
    }
})


onMounted(() => {
    if(props.err.status) {
        throw createError({ message: props.err.message })
    }
})
</script>