import Vue from "vue"
import Vuex from "vuex"
import { SET_LOADING_STATE } from "./mutation-types"

Vue.use(Vuex)

export default new Vuex.Store({
	state: { loading: false, eventHub: new Vue() },
	getters: {
		getLoading: (state) => {
			return state.loading
		},
		getEventHub: (state) => {
			return state.eventHub
		},
	},
	mutations: {
		[SET_LOADING_STATE](state, payload) {
			state.loading = payload.loading
		},
	},
	actions: {
		setLoading({ commit }, loading) {
			commit({ type: SET_LOADING_STATE, loading: loading })
		},
	},
})
