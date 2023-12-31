import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./reducers/itemSlice"


const rootReducer = combineReducers({
    itemReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']