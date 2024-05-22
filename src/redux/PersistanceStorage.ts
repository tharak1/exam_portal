import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";


const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
    theme:themeReducer,
});

const persistedReducer = persistReducer(persistConfig,reducer);


export const store = configureStore({
    reducer : persistedReducer
});