<template>
    <form
        @submit.prevent="handleRegisterForm"
        class="bg-white shadow-2xl rounded-lg p-10 text-center"
    >
        <!-- title  -->
        <h1 class="text-black text-lg md:text-3xl font-bold leading-5 mb-5">
            Register Now!
        </h1>

        <!-- name  -->
        <UiInput
            title="Name"
            placeholder="Enter your name"
            @input="(e) => (form.name = e.target.value)"
        />
        <hr />
        <!-- username  -->
        <UiInput
            title="Username"
            placeholder="Enter your username"
            @input="(e) => (form.username = e.target.value)"
        />
        <hr />
        <!-- email  -->
        <UiInput
            title="E-mail"
            placeholder="Enter your email"
            type="email"
            @input="(e) => (form.email = e.target.value)"
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
            Submit
        </button>
    </form>
</template>

<script setup>

// register function 
const { registerUser } = useAuth();

// form reactive
const form = reactive({
    name: "",
    email: "",
    username: "",
    password: "",
    loading: true
});

// handle form submit
async function handleRegisterForm() {
    // set loading
    form.loading = true;

    // handle
    try {
        // login
        let status = await registerUser(form.name, form.username, form.email, form.password);
        if(status == true) {
            // registered 
            alert('Registered successfully')
        }
    } catch (e) {
        // err
        console.log(e);
    } finally {
        // set loading
        form.loading = false;
    }
}
</script>
