/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {IProductState} from 'app/models/reducers/product';

const initialState: IProductState = {
    addedProducts: []
};

interface IProductAction {
    index: number;
}

export const basketReducer = createReducer(initialState, {
    [types.BASKET_ADD_PRODUCT](state: IProductState, action: IProductAction) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            addedProducts: state.addedProducts.concat(action.product)
        };
    },
    [types.BASKET_REMOVE_PRODUCT](state: IProductState, action: IProductAction) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            addedProducts: state.addedProducts.filter((item: any, index: number) => index !== action.index),
        };
    }
});
