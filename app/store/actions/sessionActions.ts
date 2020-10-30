import * as types from './types';

export function readDeskBarcode(qrcode: string, desk: object) {
    return {
        type: types.SESSION_CREATE,
        qrcode,
        desk
    };
}
