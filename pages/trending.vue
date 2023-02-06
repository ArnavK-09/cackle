<template>
    <section class="trending dark:text-white">
        <h1>Trending!</h1>
    </section>
</template>

<script setup>
useHead(useMetaHelper({
    title: 'What\'s Trending?'
}))
definePageMeta({
  middleware: "construction"
})
</script>