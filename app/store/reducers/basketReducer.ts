/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {IBasketState} from 'app/models/reducers/product';

const initialState: IBasketState = {
    addedProducts: [],
    total : 0
};

interface IProductAction {
    index: number;
}

export const basketReducer = createReducer(initialState, {
    [types.BASKET_ADD_PRODUCT](state: IBasketState, action: any) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            addedProducts: state.addedProducts.concat(action.product),
            total : state.total + action.product.price
        };
    },
    [types.BASKET_REMOVE_PRODUCT](state: IBasketState, action: IProductAction) {
        return {
            ...state,
            // @ts-ignore
            addedProducts: state.addedProducts.filter((item: any, index: number) => index !== action.index),
        };
    },
    [types.BASKET_DROP_BASKET](state: IBasketState) {
        return {
            ...state,
            addedProducts: [],
            total: 0
        };
    }
});
