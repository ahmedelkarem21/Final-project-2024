import { INCREMENT, DECREMENT } from "../actions/types";


export default function counterReducer(state = { counter: 0 }, action) {

    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case 'ADD_BY_AMOUNT':
            return { ...state, counter: state.counter + action.payload };
        case 'DECREASE_BY_AMOUNT':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state
    }
}