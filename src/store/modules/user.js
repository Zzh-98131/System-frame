import Cookies from 'js-cookie'
const TokenKey = 'EdimsBackstageTOKEN'

const state = {
  token: Cookies.get(TokenKey),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_LOGIN_TOKEN: (state, token) => {
    state.token = token
    state.name = name
  },
  CLEAR_LOGIN_TOKEN: (state) => {
    state.token = null
  }
}

const actions = {
  setLoginToken({ commit }, name) {
    commit('SET_LOGIN_TOKEN', name)
    Cookies.set(TokenKey, name)
    // console.log('name', Cookies.get(TokenKey), 'name', state.name, 'token', state.token)
  },
  clearLoginToken({ commit }) {
    commit('CLEAR_LOGIN_TOKEN')
    Cookies.remove(TokenKey, name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
