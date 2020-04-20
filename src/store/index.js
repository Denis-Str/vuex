import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    notes: []
  },
  // в actions делаем запросы к серверу, а так же
  // объявляем методы, которые инициируют мутации
  actions: {
    // addNote({commit}, note) {
    //   commit('ADD_NOTE', note)
    // },

    // обращаемся к json и вызываем мутацию
    fetchJSON(store) {
      store.commit('addJson', require("../data/template.json"))
    }
  },
  //в mutations изменяем состояние хранилища
  mutations: {
    // ADD_NOTE(state, note) {
    //   state.notes.push(note)
    // },
    //пушим в массив
    addJson(state, json) {
      json.map(note => state.notes.push(note))
    }
  },
  //в getters вычисляем свойства хранилища, наприм. фильтр, id и тд
  // это как бы computed?
  getters: {
    // notes(state) {
    //     return state.notes
    // }
  }
});