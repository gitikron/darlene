import { createStore } from "vuex";

export default createStore({
    state: {
        Auth: {
            username: 'ss',
            name: '',
            role: ''
        },

    },
    getters: {
        getAuth(state) {
            return state.Auth
        },

    },
    mutations: {
        SET_AUTH(state, data) {
            state.Auth = {
                ...state.Auth,
                ...data
            }
        },
    },
    actions: {

        setAuth({ commit }, data) {
            commit('SET_AUTH', data)
        },

    },
    modules: {},
});