import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentTime: 0,
      comments: { 
        videoId: 1,
        messages: [
          {
            timestamp: 834,
            text: "Zilean has really good synergies with Nocturne because of his ult. Noc will probably start red, get an early gank at lvl 2, and then another one at lvl 6. If Nocturne gets ahead early, we can expect him to snowball. If not, he'll be pretty much useless in lategame."
          },
          {
            timestamp: 907,
            text: "Don't think they can hold up that pressure for super long. Varus will just outscale them and be super dangerous from min 15."
          },
          {
            timestamp: 1154,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
          {
            timestamp: 523,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
          {
            timestamp: 622,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
          {
            timestamp: 914,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
          {
            timestamp: 1041,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
          {
            timestamp: 813,
            text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."
          },
        ],
      }
    },
    mutations: {
      incrementTime (state, payload) {
        state.currentTime = Math.round(payload)
      }
    }
  })
}

export default createStore