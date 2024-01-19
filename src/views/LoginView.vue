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

<script>
import gql from "graphql-tag";
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import store from '../store/store'


export default {
    data() {
        return {
            v$: useValidate(),
            emailPH: 'Email',
            passwordPH: 'Password',
            email: '',
            password: ''
        }
    },
    apollo: {

    },
    validations() {
        return {
            email: { required },
            password: { required },
        }
    },
    methods: {
        async login() {
            console.log(this.email, this.password, this.$apollo)

            this.v$.$validate()
            if (!this.v$.$error) {
                // submit graphql
                if (this.name !== "" && this.password !== "") {
                    await this.$apollo.mutate({
                        mutation: gql`mutation CreateUserTokenFromEmailPassword(
                            $email: String!
                            $password: String!
                            $intent: ViewerIntent!
                        ) {
                            createUserToken: createUserTokenFromEmailPassword(
                            email: $email
                            password: $password
                            intent: $intent
                            ) {
                            successful
                            messages {
                                message
                                code
                                field
                            }
                            result {
                                accessToken
                                refreshToken
                            }
                            messages {
                                code
                                message
                                field
                            }
                            }
                        }`,
                        variables: {
                            email: this.email,
                            password: this.password,
                            intent: 'PATIENT'
                        }
                    }).then((data) => {
                        console.log(data)
                        const accessToken = data.data.createUserToken.result.accessToken
                        const refreshToken = data.data.createUserToken.result.refreshToken
                        //save data to cookies
                        this.$cookies.set("access-token", accessToken, "8h");
                        this.$cookies.set("refresh-token", refreshToken, "8h");

                        //save to veux store
                        store.commit('setTokens', { accessToken: accessToken, refreshToken: refreshToken })
                        console.log('store', store)
                    }).catch((error) => {
                        console.error('error', error)
                    })
                }

                this.$router.push('/profile')
            } else {
                alert('Form failed validation')
            }
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
    max-width: 500px;
    width: 50%;
    box-sizing: content-box;
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
    box-sizing: content-box;
    background-color: rgb(0, 149, 255);
    color: white;
    font-weight: bold;
}
</style>