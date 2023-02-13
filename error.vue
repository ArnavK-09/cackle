<template>
    <NuxtLink to="/"><h1>Error</h1></NuxtLink>
    <p v-html="error.stack"></p>
</template>

<script setup>
const props = defineProps({
    error: {
        required: false,
    },
})

useHead(useMetaHelper({
    title: `Oh No! You met with an error`
}))

</script>