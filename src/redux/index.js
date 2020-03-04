import { createStore } from "redux"

const initialState = {
    playInfo: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAY":
            return {
                ...state,
                playInfo: [action.payload, ...state.playInfo]
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default store