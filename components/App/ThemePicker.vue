<template>
    <section class="themepicker">
        <h1 class="text-cackle-300 dark:text-white">Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <button @click="() => { throw createError({ statusMessage: 'Page Not Found' }) }">ER</button>
    </section>
</template>