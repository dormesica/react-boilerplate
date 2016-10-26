import { fromJS } from 'immutable';


const defaultState = fromJS({
    count: 0
});

export default (state = defaultState, action) => {
    if (action.type === 'add') {
        return fromJS({
            count: state.get('count') + action.payload
        });
    } else if (action.type === 'subtract') {
        return fromJS({
            count: state.get('count') - action.payload
        });
    }

    // in case no action type matched return the old state
    return fromJS({
        count: state.get('count')
    });
}