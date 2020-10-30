/**
 * For selected products.
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {ISessionState} from 'app/models/reducers/session';

const initialState: ISessionState = {
    qrcode: null,
    desk: {}
};

interface IProductAction {
    qrcode: string;
    desk: object;
}

export const sessionReducer = createReducer(initialState, {
    [types.SESSION_CREATE](state: ISessionState, action: IProductAction) {
        //console.log(types.BASKET_ADD_PRODUCT, action)
        return {
            ...state,
            qrcode: action.qrcode,
            desk: action.desk,
        };
    }
});
