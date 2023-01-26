<template>
    <SafeSection :classes="'border-y shadow-md z-8 rounded-md' + defaultBorderColor">
        <div class="flex items-center flex-shrink-0 p-4 pb-0">

            <div class="flex w-12 items-top">
                <img :src="user.img" alt="" class="inline-block w-10 h-10 rounded-full">
            </div>
            <div class="w-full p-2">
                <textarea v-model="postContent"
                    class="w-full h-20 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0 overflow-hidden resize-y"
                    :placeholder="placeholder"></textarea>
            </div>
        </div>

        <!-- File Selector -->

        <div class="p-4 pl-16">

            <img :src="inputImageUrl" v-if="inputImageUrl" alt="" class="border rounded-2xl"
                :class="defaultBorderColor">

            <input type="file" ref="imageInput" hidden accept="image/png, image/gif, image/jpeg"
                @change="handleImageChange">

        </div>

        <!-- Icons -->
        <div class="flex p-2 pl-14">
            <div class="flex w-full">

                <div class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400"
                    @click="handleImageClick" :class="defaultTransition">
                    <PhotoIcon />
                </div>

                <div class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400"
                    @click="handleImageClick" :class="defaultTransition">
                    <ClipboardIcon />
                </div>

            </div>


            <div class="ml-auto">
                <UIPostButton @onClick="handlePostButton" />
            </div>

        </div>
    </SafeSection>
</template>

<script setup>
import { PhotoIcon, ClipboardIcon } from "@heroicons/vue/24/outline";


const { defaultBorderColor, defaultTransition } = useTailwindTheme()
const inputImageUrl = ref('')
const placeholder = computed(() => {
    let holders = [
        'Hey! What\'s Going?',
        'How are you feeling?',
        'Type Something.....',
        'What\'s status?',
        'Feeling Good?...'
    ]
    return holders[Math.floor(Math.random() * holders.length)]
})

const postContent = ref('')

function handleImageChange(e) {
    console.log(e)
}

function handlePostButton(e) {
    console.log(e)
}
function handleImageClick(e) {
    console.log(e)
}
defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>