<template>
  <p>{{ route.params.username }}</p>
</template>

<script setup>
const route = useRoute()

useHead(useMetaHelper({
    title: `Profile Of @${route.params.username}`
}))
</script>

