<template>
  <section id="feed">
    <FeedPost v-for="i in Math.floor(Math.random() * 69)" :key="i" />
  </section>
</template>
