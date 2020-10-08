export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({ ...initialState }, { type: "__INIT__" })
  let listenerns = []

  return {
    dispatch(action) {
      state = rootReducer(state, action)
      listenerns.forEach(listenern => listenern(state))
    },
    subscribe(fn) {
      listenerns.push(fn)
      return {
        unsubscribe() {
          listenerns = listenerns.filter(l => l !== fn)
        }
      }
    },
    getState() {
      return state
    }
  }
}