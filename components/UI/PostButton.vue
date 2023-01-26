<template>
    <button :disabled="disabled" @click="() => $emit('onClick')" :class="btnClasses">
        <span :class="`text-${font}`"> {{ label }} </span>
    </button>
</template>
<script setup>
const { defaultTransition } = useTailwindTheme();
defineProps({
    label: {
        type: String,
        required: false,
        default: 'Post'
    },
    spread: {
        type: Boolean,
        required: false,
        default: false
    },
    font: {
        type: String,
        required: false,
        default: 'sm'
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    }
})

const btnClasses = computed(() => {
    let classes = `
    py-1 px-4 cursor-alias rounded-full bg-cackle-500 text-center text-white border flex justify-center border-cackle-500 hover:bg-cackle-500/10 hover:text-cackle-500 hover:shadow-sm font-semibold hover:font-semibold"
    `;

    return classes + defaultTransition;
})
</script>