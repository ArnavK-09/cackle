<template>
  <section id="feed">
    <FeedPost v-for="i in Math.floor(Math.random() * 5)" :key="i" />
  </section>
</template>
