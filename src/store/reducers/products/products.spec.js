import productsReducer from './products';
import { createAddAction, createRemoveAction } from '../../../actions/products';

const defaultState = [];

describe('products reducer', () => {
    it('initializes the state to be the default state', () => {
        const state = productsReducer(undefined, {});

        expect(state).toEqual(defaultState);
    });

    it('ignores irrelevant actions', () => {
        const state = productsReducer(defaultState, { type: 'non_relevant' });

        expect(state).toEqual(defaultState);
    });

    it('adds a new product to the list', () => {
        let state = productsReducer(defaultState, createAddAction('item1', 2.54));
        
        expect(state).toEqual([{
            name: 'item1',
            price: 2.54,
        }]);
    });

    it('removes a product from the list', () => {
        let state = productsReducer(defaultState, createAddAction('item1', 2.54));
        state = productsReducer(state, createRemoveAction('item1'));

        expect(state).toEqual(defaultState);
    });
});
