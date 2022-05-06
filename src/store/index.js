import { createStore } from "vuex";

export default createStore({
    state: {
        items: []
    },
    mutations: {
        setItem(state, payload) {
            state.items = payload
            console.log(state.items);
        }
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const res = await fetch('api.json')
                const data = await res.json()
                commit('setItem', data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {
    }
})