<template>
    <section id="feed">
        <PostOfFeed v-for="i in Math.floor(Math.random() * 69)" :key="i"/>
    </section>
</template>