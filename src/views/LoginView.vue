<template>
    <div class="log-in">
        <div class="container">
            <h1>Login</h1>
            <div class="separator"></div>
            <input type="text" :placeholder="emailPH" v-model="email" />
            <div class="separator"></div>
            <input type="password" :placeholder="passwordPH" v-model="password" />
            <div class="separator"></div>
            <button v-on:click="login">Login</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            emailPH: 'Email',
            passwordPH: 'Password',
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log(this.email, this.password)
            this.$router.push('/profile')
        }
    }
}
</script>

<style scoped>
.log-in {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: rgb(90, 90, 90);
    border-radius: 16px;
    width: 50%;
}

input {
    height: 48px;
    border-radius: 16px;
    border: 0;
    padding: 16px;
}

.separator {
    height: 16px;
}

button {
    width: 50%;
    height: 48px;
    align-self: center;
    border-radius: 16px;
    border: 0;
}
</style>