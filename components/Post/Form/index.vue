<template>
    <SafeSection
        classes="border-white-200 dark:border-gray-700 shadow-md z-8 rounded-md overflow-hidden"
    >
        <div class="flex items-center flex-shrink-0 p-3 pb-0">
            <div class="flex w-12 items-top">
                <img
                    :src="user.img"
                    alt="User Image"
                    class="inline-block w-9 h-9 rounded-full shadow-md"
                />
            </div>
            <div class="w-full p-1">
                <textarea
                    v-model="postContent"
                    class="w-full h-10 md:h-24 text-lg text-gray-900 placeholder:italic placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0 overflow-hidden resize-y"
                    :placeholder="placeholder"
                ></textarea>
            </div>
        </div>

        <!-- File Selector -->
        <div class="p-1 md:p-3 flex flex-col jusitfy-center items-center">
            <img
                v-for="file in selectedFiles"
                :src="file"
                alt="Image selected"
                class="shadow-md m-2 border rounded-2xl w-auto h-1/3 border-white-200 dark:border-gray-700 md:h-1/2"
                loading="lazy"
            />
        </div>

        <input
            type="file"
            ref="imageInput"
            hidden
            accept="image/png, image/gif, image/jpeg"
            @change="handleImageChange"
        />
        <!-- Icons -->
        <div class="flex p-1 pl-14">
            <div class="flex w-full">
                <div
                    class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400 transition ease-in-out duration-250 underline"
                    @click="openImageSelector"
                    title="Opem Image Selector"
                >
                    <PhotoIcon />
                </div>

                <div
                    class="p-2 w-10 h-10 text-blue-400 rounded-full cursor-pointer hover:bg-blue-50 dark:hover:bg-cackle-400 transition ease-in-out duration-250 underline"
                    @click="alert('TODO')"
                    title="Opem Zalgo Selector"
                >
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
// icon import
import { PhotoIcon, ClipboardIcon } from "@heroicons/vue/24/outline";

/* component */

// refs
const imageInput = ref("");
const postContent = ref("");

// data
const selectedFiles = reactive([]);
const placeholder = computed(() => {
    let holders = [
        "Hey! What's Going?",
        "How are you feeling?",
        "Type Something.....",
        "What's status?",
        "Feeling Good?...",
    ];
    return holders[Math.floor(Math.random() * holders.length)];
});

// props
defineProps({
    user: {
        type: Object,
        required: true,
    },
});

/* functions */

// open image selector
const openImageSelector = () => imageInput.value.click();

// add image to list
function handleImageChange(e) {
    // files limit check - 6
    if (selectedFiles.length > 5) {
        throw createError({ message: "Image limit exceeded :(", fatal: true });
    };

    // file reader init 
    const newFile = e.target.files[0];
    const reader = new FileReader();

    // adding file to list on event 
    reader.onload = (event) => {
        selectedFiles.push(event.target.result);
    };

    // reading file 
    reader.readAsDataURL(newFile);
}

// post
function handlePostButton(e) {
    // TODO 
    alert("post btn click");
}
</script>
