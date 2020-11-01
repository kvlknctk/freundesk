/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {IProductState} from 'app/models/reducers/product';

const initialState: IProductState = {
    products: {}
};

export const productReducer = createReducer(initialState, {
    [types.PRODUCTS_GET](state: IProductState, action) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            products : action.payload
        };
    }
});
