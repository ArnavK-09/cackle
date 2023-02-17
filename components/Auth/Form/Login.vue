<template>
    <form
        @submit.prevent="handleLoginForm"
        class="bg-white shadow-2xl rounded-lg p-10 text-center "
        :class="form.loading ? 'cursor-wait':''"
    >
        <!-- title  -->
        <h1 class="text-black text-lg md:text-3xl font-bold leading-5 mb-5">
            Welcome Back!
        </h1>

        <!-- username  -->
        <UiInput
            :disabled="form.loading"
            title="Username"
            placeholder="Enter your username"
            @input="(e) => (form.username = e.target.value)"
        />
        <hr />
        <!-- password  -->
        <UiInput
            :disabled="form.loading"
            title="Password"
            placeholder="Enter your password"
            type="password"
            @input="(e) => (form.password = e.target.value)"
        />
        <hr />

        <!-- submit button  -->
        <button
            :disabled="form.loading"
            type="submit"
            class="bg-black text-md text-white rounded-full font-medium hover:scale-100 scale-90 hover:shadow-black shadow-md px-3 py-4 w-full mt-5 transition ease-in-out duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Login
        </button>
    </form>
</template>

<script setup>
// imports
const { loginUser } = useAuth();

// form reactive
const form = reactive({
    username: "",
    password: "",
    loading: false,
});

// handle form submit
async function handleLoginForm() {
    // set loading
    form.loading = true;

    // handle
    try {
        // login
        await loginUser(form.username, form.password).then(() => {
            // logged in
            alert("logged successfully");

            // reload 
            window.location.reload()
        });
    } catch (e) {
        // err
        console.log(e);
    } finally {
        // set loading
        form.loading = false;
    }
}
</script>
