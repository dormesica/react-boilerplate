export default (store) => (next) => (action) => {
    console.log('example middleware');
    next();
};