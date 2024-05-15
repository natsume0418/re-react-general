import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import formReducer from "./formSlice";


export const Store = configureStore({
    reducer:{
        menu:menuReducer,
        form:formReducer
    }
});

export default Store;