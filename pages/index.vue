<template>
    <SafeSection>
        <ClientOnly>
            <PostForm :user="currentUser" />
        </ClientOnly>
        <Feed />
    </SafeSection>
</template>

<script setup>
// get current user
const { getAuthUser } = useAuth();
const currentUser = getAuthUser.value;

// meta tags
useHead(
    useMetaHelper({
        title: "Home"
    })
);
</script>
