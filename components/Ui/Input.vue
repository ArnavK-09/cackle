<template>
    <div class="my-3">
        <span
            v-if="title"
            :class="disabled ? 'text-gray-600' : ''"
            class="mb-1 text-left text-cackle-500 text-sm font-semibold block"
            >{{ title }}</span
        >
        <input
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :type="type"
            v-on:change="$emit('valueUpdated', $event)"
            class="placeholder:italic placeholder:text-gray-400 rounded-lg block w-full focus:ring-cackle-500 ring-3 focus:border-cackle-500 shadow-md transition ease-in-out duration-250 dark:focus:border-gray-700 dark:focus:ring-gray-700 font-normal"
        />
    </div>
</template>

<script setup>
// props
defineProps({
    title: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        default: "",
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    required: {
        type: Boolean,
        default: true,
        required: false,
    },
    type: {
        type: String,
        default: "text",
        required: false,
    },
});
</script>
