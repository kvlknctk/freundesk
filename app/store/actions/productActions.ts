import * as types from './types';

export function getProducts(data: any) {
    return {
        type: types.PRODUCTS_GET,
        payload: data
    };

}
