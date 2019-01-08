export default ({ getState, dispatch }) => next => action => {
    console.log(action);

    return next(action);
};
