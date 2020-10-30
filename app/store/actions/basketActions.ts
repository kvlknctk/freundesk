import * as types from './types';

export function basketAddProduct(product: object) {
    return {
        type: types.BASKET_ADD_PRODUCT,
        product: product
    };
}

export function basketRemoveProduct(index: number) {
    return {
        type: types.BASKET_REMOVE_PRODUCT,
        index: index
    };
}
