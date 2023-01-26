<template>
    <SafeSection>
        <PostForm :user="{ img: 'https://picsum.photos/200/200'}"/>
        <Feed />
    </SafeSection>
</template>

<script setup>
useHead(useMetaHelper({
    title: 'Home'
}))
</script>