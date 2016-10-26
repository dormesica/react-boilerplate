export const addAction = (payload) => {
    return {
        type: 'add',
        payload
    };
};

export const subtractAction = (payload) => {
    return {
        type: 'subtract',
        payload
    };
}
