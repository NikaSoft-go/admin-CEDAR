import {configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import userReducer from "./slices/userSlice";
import invoiceReducer from "./slices/invoiceSlice";
import reportReducer from "./slices/reportSlice";
import reportSpacingReducer from "./slices/reportSpacing";
import jobInvoiceReducer from "./slices/jobInvoiceSlice";

const reducers = combineReducers({
    user: userReducer,
    invoice: invoiceReducer,
    report: reportReducer,
    reportSpacing: reportSpacingReducer,
    jobInvoice: jobInvoiceReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
