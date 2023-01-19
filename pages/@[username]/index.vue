<template>
  <p>{{ route.params.username }}</p>
</template>

<script setup>
    const route = useRoute()
    useHead(useHeadHelper(`Profile Of @${route.params.username}`))
</script>

