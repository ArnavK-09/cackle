<template>
    <form
        @submit.prevent="handleLoginForm"
        class="bg-white dark:bg-cackle-300 shadow-2xl rounded-lg p-10 text-center"
    >
        <!-- title  -->
        <h1
            class="text-black dark:text-white text-lg md:text-3xl font-bold leading-5 underline mb-5"
        >
            Welcome Back!
        </h1>

        <!-- username  -->
        <UiInput
            title="Username"
            placeholder="Enter your username"
            @input="(e) => (form.username = e.target.value)"
        />
        <hr />
        <!-- password  -->
        <UiInput
            title="Password"
            placeholder="Enter your password"
            type="password"
            @input="(e) => (form.password = e.target.value)"
        />
        <hr />

        <!-- submit button  -->
        <button
            type="submit"
            class="bg-black text-md text-white rounded-full font-medium hover:scale-100 scale-90 hover:shadow-black shadow-md px-3 py-4 w-full mt-5 transition ease-in-out duration-250"
        >
            Login
        </button>

        <!-- change form  -->
        <p
            @click="$emit('changeForm')"
            class="text-black dark:text-gray-100 hover:underline text-thin"
        >
            Create New Account ?
        </p>
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
        await loginUser(form.username, form.password);
    } catch (e) {
        // err
        console.log(e);
    } finally {
        // set loading
        form.loading = false;
    }
}
</script>
