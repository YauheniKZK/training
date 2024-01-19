<template>
    <div class="profile">
        <div v-if="$apollo.queries.viewer.loading">Loading...</div>
        <div class="menu">
            <div>
                <div class="menu-item" v-for="item in menu" :style="setTabColor(item.id)"
                    v-on:click="setCurrentMenu(item.id)">{{ item.title }}
                </div>
            </div>
        </div>
        <div class="content">
            <h1>User Profile</h1>
            <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" alt="Avatar">
            <div class="info">
                <div class="lables">
                    <div>Display Name:</div>
                    <div>Full name:</div>
                    <div>Language:</div>
                    <div>Email:</div>
                </div>
                <div>
                    <div class="display-name">{{ user.displayName }}</div>
                    <div>{{ user.firstName + ' ' + user.lastName }}</div>
                    <div>{{ user.language }}</div>
                    <div>{{ user.email }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { user_profile_query } from '../api/queries.ts'
import { useQuery } from '@vue/apollo-composable'

export default {
    data() {
        return {
            menu: [
                {
                    id: 0,
                    title: 'Home'
                },
                {
                    id: 1,
                    title: 'User Profile'
                },
                {
                    id: 2,
                    title: 'About'
                }
            ],
            currentMenuIndex: 1,
            user: {
                id: 1,
                displayName: 'hvhau',
                firstName: 'Hau',
                lastName: 'Huynh Van',
                language: 'Vietnamese',
                email: 'huynhvanhauvn@gmail.com'
            },
        }
    },
    apollo: {
        viewer: {
            query: user_profile_query,
            context() {
                return {
                    headers: {
                        authorization: `Bearer ${this.getAccessToken()}`,
                    },
                }
            },
            // variables: {
            //     locale: 'vi',
            // },
            update(data) {
                this.user = data.viewer.currentUser
                console.log('update', data)
            }
        }
    },
    methods: {
        setTabColor: function (id) {
            return id === this.currentMenuIndex ? { 'color': 'white', 'font-weight': 'bold' } : {}
        },
        setCurrentMenu(id) {
            this.currentMenuIndex = id
        },
        getAccessToken() {
            return this.$cookies.get("access-token") || ''
        }
    },
    created() {
        // this.$apollo
        // const { result, loading, error } = useQuery(user_profile_query, {
        //     context: () => ({
        //         headers: {
        //             authorization: `Bearer ${getAccessToken()}`,
        //         },
        //     }),
        // })
        console.log('created')
    }
}
</script>

<style scoped>
.profile {
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: bold;
}

.menu {
    width: 200px;
    margin: 16px 16px 0 16px;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    background-color: rgb(0, 149, 255);
}

.menu-item {
    /* background-color: red; */
    padding: 8px;
    cursor: pointer;
}

.content {
    flex: 1;
    padding: 16px;
}

img {
    width: 200px;
    height: 200px;
}
.display-name {
    font-weight: bold;
}
.info {
    display: flex;
}
.lables {
    margin-right: 16px;
}
</style>