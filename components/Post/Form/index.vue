<template>
    <SafeSection :classes="' shadow-md z-8 rounded-md' + defaultBorderColor">
        <div class="flex items-center flex-shrink-0 p-3 pb-0">

            <div class="flex w-12 items-top">
                <img :src="user.img" alt="User Image" class="inline-block w-9 h-9 rounded-full shadow-md">
            </div>
            <div class="w-full p-1">
                <textarea v-model="postContent"
                    class="w-full h-10 md:h-24 text-lg text-gray-900 placeholder:italic placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0 overflow-hidden resize-y"
                    :placeholder="placeholder"></textarea>
            </div>
        </div>

        <!-- File Selector -->

        <div class="p-3 pl-16 flex flex-wrap">
            <img v-for="file in selectedFiles" :src="file" alt="Image selected" class="shadow-md m-2 border rounded-2xl h-24 w-24"
                :class="defaultBorderColor" loading="lazy" />
        </div>

        <input type="file" ref="imageInput" hidden accept="image/png, image/gif, image/jpeg"
            @change="handleImageChange">
        <!-- Icons -->
        <div class="flex p-1 pl-14">
            <div class="flex w-full">

                <div class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400"
                    @click="openImageSelector" :class="defaultTransition">
                    <PhotoIcon />
                </div>

                <div class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400"
                    @click="alert('TODO')" :class="defaultTransition">
                    <ClipboardIcon />
                </div>

            </div>


            <div class="ml-auto">
                <PostButton @onClick="handlePostButton" />
            </div>

        </div>
    </SafeSection>
</template>

<script setup>
import { PhotoIcon, ClipboardIcon } from "@heroicons/vue/24/outline";
const openImageSelector = () => imageInput.value.click();
const imageInput = ref('')
const { defaultBorderColor, defaultTransition } = useAppConfig().theme;
const selectedFiles = reactive([])
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
    if(selectedFiles.length > 5) {
        throw createError({ message: 'Image limit exceeded :(', fatal: true })
        return null
    }
    const newFile = e.target.files[0];
    const reader = new FileReader()
    reader.onload = (event) => {
            selectedFiles.push(event.target.result)
    };
    reader.readAsDataURL(newFile)
}

function handlePostButton(e) {
    alert('post btn click')
}
defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>