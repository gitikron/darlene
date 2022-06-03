import { createStore } from "vuex";

export default createStore({
    state: {
        Auth: {
            username: '',
            name: '',
            role: '',
            position: ''
        },
        Setting: {
            main: '',
            lineStock: '',
            lineAccount: ''
        }

    },
    getters: {
        getAuth(state) {
            return state.Auth
        },
        getSetting(state) {
            return state.Setting
        },

    },
    mutations: {
        SET_AUTH(state, data) {
            state.Auth = {
                ...state.Auth,
                ...data
            }
        },
        SET_SETTING(state, data) {
            state.Setting = {
                ...state.Setting,
                ...data
            }
        },
    },
    actions: {

        setAuth({ commit }, data) {
            commit('SET_AUTH', data)
        },
        setSetting({ commit }, data) {
            commit('SET_SETTING', data)
        },

    },
    modules: {},
});