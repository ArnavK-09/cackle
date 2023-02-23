<template>
    <SafeSection>
        <Transition name="form">
            <!-- login form  -->
            <AuthFormLogin v-if="loginForm" @changeForm="changeForm" />

            <!-- register form  -->
            <AuthFormRegister v-else @changeForm="changeForm" />
        </Transition>

        <!-- change form  -->
        <div class="text-center opacity-80">
            <button
                type="button"
                @click="changeForm"
                class="text-black font-semibold text-center hover:underline text-thin cursor-pointer select-none"
            >
                {{
                    loginForm == true
                        ? "Create New Account"
                        : "Already Registered?"
                }}
            </button>
        </div>
    </SafeSection>
</template>
<script setup>
// form  var
const loginForm = ref(false);
// change form
function changeForm() {
    loginForm.value = !loginForm.value;
}
</script>
