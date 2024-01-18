<template>
    <div class="profile">
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
            <div>{{ user.displayName }}</div>
            <div>{{ user.firstName + ' ' + user.lastName }}</div>
            <div>{{ user.language }}</div>
            <div>{{ user.email }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    id: 0,
                    title: 'Home',
                },
                {
                    id: 1,
                    title: 'User Profile',
                },
                {
                    id: 2,
                    title: 'About',
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
            }
        }
    },
    methods: {
        setTabColor: function (id) {
            return id === this.currentMenuIndex ? { 'color': 'white', 'font-weight': 'bold' } : {}
        },
        setCurrentMenu(id) {
            this.currentMenuIndex = id
        }
    },
    created() {
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
</style>