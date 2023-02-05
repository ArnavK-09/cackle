<template>
    <p class="text-sm">
        <span class="text-gray-500"> Replying to </span>

        <!-- TODO -->
        <NuxtLink
            :to="id ? '/post/' + id : '@' + username"
            class="text-cackle-600 hover:underline cursor-pointer"
        >
            @{{ username }} </NuxtLink
        ><span class="text-gray-500">'s post </span>
    </p>
</template>

<script setup>
// props
defineProps({
    username: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: false,
    },
});
</script>
