import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentTime: 0,
      comments: { 
        videoId: 1,
        messages: [],
      }
    },
    mutations: {
      incrementTime (state, payload) {
        state.currentTime = Math.round(payload)
      },
      loadComments (state, payload) {
        state.comments.messages = payload;
      },
      insertComment (state, payload) {
        state.comments.messages.push(payload);
      }
    }
  })
}

export default createStore