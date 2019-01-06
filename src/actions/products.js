export const actionTypes = Object.freeze({
    ADD: 'Products_ADD',
    REMOVE: 'Products_REMOVE',
});

export const createAddAction = (name, price) => ({
    type: actionTypes.ADD,
    payload: { name, price },
});

export const createRemoveAction = name => ({
    type: actionTypes.REMOVE,
    payload: name,
});
