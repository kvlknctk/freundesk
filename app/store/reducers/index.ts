/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as basketReducer from './basketReducer';
import * as sessionReducer from "./sessionReducer";
import * as productReducer from "./productReducer";

export default Object.assign(
    loginReducer,
    loadingReducer,
    themeReducer,
    basketReducer,
    sessionReducer,
    productReducer
);
