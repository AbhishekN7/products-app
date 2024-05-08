import { configureStore } from "@reduxjs/toolkit"

import productSlice from "./productSlice";




const toolkitStore = configureStore({
    reducer: {
        products: productSlice,
    },
})

export default toolkitStore;