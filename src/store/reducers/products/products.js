import { actionTypes } from '../../../actions/products';

const defaultState = [];

export default function (state = defaultState, action) {
    let newState = state;

    switch (action.type) {
        case actionTypes.ADD:
            const { name, price } = action.payload;
            newState = [...state, { name, price }];
            break;
        case actionTypes.REMOVE:
            newState = state.filter(item => item.name !== action.payload);
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}
