<template>
    <section>
        <!-- spinner  -->
        <div v-if="isLoading" class="flex items-center justify-center ">
            <AppSpinner />
        </div>

        <!-- view  -->
        <div v-else>
            <NuxtErrorBoundary>
                <slot />
                <template #error="{ error }">
                    <HandleError :error="error"/>
                </template>
            </NuxtErrorBoundary>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})
</script>