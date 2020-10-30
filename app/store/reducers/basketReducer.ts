/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {IProductState} from 'app/models/reducers/product';

const initialState: IProductState = {
    addedProducts: [],
    total : 0
};

interface IProductAction {
    index: number;
}

export const basketReducer = createReducer(initialState, {
    [types.BASKET_ADD_PRODUCT](state: IProductState, action: any) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            addedProducts: state.addedProducts.concat(action.product),
            total : state.total + action.product.price
        };
    },
    [types.BASKET_REMOVE_PRODUCT](state: IProductState, action: IProductAction) {
        return {
            ...state,
            addedProducts: state.addedProducts.filter((item: any, index: number) => index !== action.index),
        };
    },
    [types.BASKET_DROP_BASKET](state: IProductState) {
        return {
            ...state,
            addedProducts: [],
            total: 0
        };
    }
});
