import { TABLE_RESIZE } from "./types";

export function rootReducer(state, { type, data }) {
  switch (type) {
    case TABLE_RESIZE:
      const typeState = data.type === 'col' ? 'colState' : 'rowState'
      const prevState = state[typeState]

      prevState[data.id] = data.value

      return { ...state, [typeState]: prevState }

      default:
        return state
  }
}