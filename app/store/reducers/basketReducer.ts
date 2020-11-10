/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {IBasketState} from 'app/models/reducers/product';
import Toast from 'react-native-toast-message';

const initialState: IBasketState = {
    addedProducts: [],
    total: 0
};

interface IProductAction {
    index: number;
}

export const basketReducer = createReducer(initialState, {
    [types.BASKET_ADD_PRODUCT](state: IBasketState, action: any) {
        Toast.show({
            text2: `${action.product.name} added to your cart.`,
            bottomOffset: 40,
            type: 'success',
            position: 'bottom',
        });
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            addedProducts: state.addedProducts.concat(action.product),
            total: state.total + action.product.price
        };
    },
    [types.BASKET_REMOVE_PRODUCT](state: IBasketState, action: IProductAction) {
        Toast.show({
            text2: `Removed from your card.`,
            bottomOffset: 40,
            type: 'info',
            position: 'bottom',
        });
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
