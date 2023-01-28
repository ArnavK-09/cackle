<template>
    <button
        :disabled="disabled"
        @click="() => $emit('onClick')"
        :class="btnClasses"
    >
        <!-- label for bigger devices  -->
        <span :class="`hidden sm:block text-${font}`"> {{ label }} </span>
        <!-- icon for smaller devices  -->
        <span :class="`sm:hidden text-${font} w-5 h-5`">
            <PaperAirplaneIcon />
        </span>
    </button>
</template>
<script setup>
// imports
import { PaperAirplaneIcon } from "@heroicons/vue/24/outline";
const { defaultTransition } = useAppConfig().theme;

// props for button
defineProps({
    label: {
        type: String,
        required: false,
        default: "Post",
    },
    font: {
        type: String,
        required: false,
        default: "sm",
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
});

// combining classes
const btnClasses =
    `
        py-1 px-4 cursor-pointer rounded-full bg-cackle-500 text-center text-white border flex 
        justify-center border-cackle-500 hover:bg-cackle-500/10 hover:text-cackle-500 
        hover:shadow-sm font-semibold 
    ` + defaultTransition;
</script>
