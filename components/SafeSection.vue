<template>
    <section>
        <!-- spinner  -->
        <div v-if="isLoading" :class="doCenter == true ? 'flex items-center justify-center' : '' ">
            <HandleLoading />
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
    },
    doCenter: {
        type: Boolean,
        default: true,
        required: false
    }
})
</script>