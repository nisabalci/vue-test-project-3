import Vue from "vue"
import Vuex from "vuex"
import { SET_LOADING_STATE } from "./mutation-types"
import { SET_TEXT_STATE } from "./mutation-types"

Vue.use(Vuex)

export default new Vuex.Store({
	state: { loading: false, eventHub: new Vue(), message: "" },
	getters: {
		getLoading: (state) => {
			return state.loading
		},
		getEventHub: (state) => {
			return state.eventHub
		},
		getText: (state) => {
			return state.message
		},
	},
	mutations: {
		[SET_LOADING_STATE](state, payload) {
			state.loading = payload.loading
		},
		[SET_TEXT_STATE](state, payload) {
			state.message = payload.message
		},
	},
	actions: {
		setLoading({ commit }, loading) {
			commit({ type: SET_LOADING_STATE, loading: loading })
		},
		setText({ commit }, message) {
			commit({ type: SET_TEXT_STATE, message: message })
		},
	},
})
