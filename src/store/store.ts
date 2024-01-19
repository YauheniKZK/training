import { createStore } from 'vuex'

const store = createStore({
    state: {
        accessToken: '',
        refreshToken: ''
    },
    mutations: {
        setTokens(state, payload) {
            state.accessToken = payload.accessToken
            state.refreshToken = payload.refreshToken
        }
    }
})

export default store