<template>
    <SafeSection>
        <!-- login form  -->
        <AuthFormLogin v-if="loginForm" @changeForm="changeForm"/>

        <!-- register form  -->
        <AuthFormRegister v-else @changeForm="changeForm"/>
    </SafeSection>
</template>
<script setup>
// form  var
const loginForm = ref(true);

// change form
function changeForm() {
    console.log('debug')
    loginForm.value = !loginForm.value;
}
</script>
