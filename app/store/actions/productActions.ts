import * as types from './types';

export function getProducts(data: object) {
    return {
        type: types.PRODUCTS_GET,
        payload: data
    };

}
