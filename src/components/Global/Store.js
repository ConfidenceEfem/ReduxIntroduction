import {configureStore} from "@reduxjs/toolkit"
import myInputReducer from "./InputReducer";

export const store = configureStore({
    reducer: {myInputReducer}
})