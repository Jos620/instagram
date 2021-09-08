import { Getters, Mutations, MutationsInterface, State } from './types'

// Vuex State ----------------------------------------------------------------|
export const state = (): State => ({
  user: {
    username: '',
  },
})

// Vuex Getters --------------------------------------------------------------|
export const getters: Getters = {
  username: state => state.user.username,
}

// Vuex Mutations ------------------------------------------------------------|
export const mutations: MutationsInterface = {
  [Mutations.SET_USERNAME](state, newUserName) {
    state.user.username = newUserName
  },
}

// Vuex Actions --------------------------------------------------------------|
export const actions = {
  nuxtServerInit({ commit }: any, { app }: any) {
    // Get cookie data when Nuxt server inits --------------------------------|
    const username = app.$cookiz.get('username')
    if (username) commit(Mutations.SET_USERNAME, username)
  },
}
