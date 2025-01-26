import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import formReducer from "./form/formSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        form: formReducer,
    },
});

export default store;
