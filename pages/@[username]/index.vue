<template>
  <p>{{ route.params.username }}</p>
</template>

<script setup>
    const route = useRoute()
</script>