<template>
    <HandleLoading />
</template>

<script setup>
// imports
const { logOutUser } = useAuth();
const Router = useRouter();
// log out user 
logOutUser().then(() => {
    // done 
    Router.push('/')
}).catch((error) => {
    // err 
    console.log(error)
    alert('FAILED!')
    // navigate 
    Router.push('/')
})

;
</script>
