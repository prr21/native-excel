import { TABLE_RESIZE } from "./types";

export function rootReducer(state, {type, data}) {
  switch (type) {
    case TABLE_RESIZE:
      const prevState = state.colState || {}
      prevState[data.id] = data.value

      return {...state, colState: prevState}
  
    default:
      return state
  }
}