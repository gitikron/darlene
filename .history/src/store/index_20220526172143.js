import { createStore } from "vuex";

export default createStore({
    state: {
        Auth: {
            username: '',
            name: '',
            role: '',
            position: ''
        },
        setting: {
            stock_noti: false,
            stock_token: '',
            cash_noti: false,
            cash_token: '',
        }

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