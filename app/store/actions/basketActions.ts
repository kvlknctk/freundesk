import * as types from './types';

export function basketAddProduct(product: object) {

    return {
        type: types.BASKET_ADD_PRODUCT,
        product: product
    };
}