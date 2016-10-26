import { expect } from 'chai';
import { fromJS } from 'immutable';

import exampleReducer from '../src/store/reducers/example-reducer';
import * as counterActions from '../src/actions/counter.action';


describe('Counter logic', () => {
    it('defaults to 0', () => {
       var state = exampleReducer(undefined, {});

       expect(state).to.equal(fromJS({
           count: 0
       }));
    });

    it('increments the count on "add" action', () => {
        const state = fromJS({
            count: 0
        });

        var nextState = exampleReducer(state, counterActions.addAction(1));
        expect(nextState).to.equal(fromJS({
            count: 1
        }));
    });

    it('decrements the count on "subtract" action', () => {
        const state = fromJS({
            count: 0
        });

        var nextState = exampleReducer(state, counterActions.subtractAction(1));
        expect(nextState).to.equal(fromJS({
            count: -1
        }));
    });
});