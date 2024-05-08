import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserProducts = createAsyncThunk("ad/get-user-products", async (e, { getState, rejectWithValue }) => {
    try {
        const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
        const { data } = await axios.get(`${baseURL}/products`)
        return data.products;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})
export const getUserProductById = createAsyncThunk("ad/get-products-by-id", async (id, { getState, rejectWithValue }) => {
    try {
        const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
        const { data } = await axios.get(`${baseURL}/products/${id}`)
        return data;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})
export const getProductByCategoryName = createAsyncThunk("ad/get-products-by-categoryname", async (name, { getState, rejectWithValue }) => {
    try {
        const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
        const { data } = await axios.get(`${baseURL}/products/category/${name}`)
        return data.products;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})
export const getSearchedProducts = createAsyncThunk("ad/get-searched-products", async (name, { getState, rejectWithValue }) => {
    try {
        const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
        const { data } = await axios.get(`${baseURL}/products/search?q=${name}`)
        return data.products;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})

const productSlice = createSlice({
    name: "Product",
    initialState: { products: [], product: [], getLoading: false },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserProducts.pending, (state, { payload }) => {
            state.products = []
            state.getLoading = true
        })
            .addCase(getUserProducts.fulfilled, (state, { payload }) => {
                state.getLoading = false
                state.products = payload
            })
            .addCase(getUserProducts.rejected, (state, { payload }) => {
                state.getLoading = false
                state.getAdError = payload
            }).addCase(getUserProductById.pending, (state, { payload }) => {
                state.product = []
                state.getLoading = true
            })
            .addCase(getUserProductById.fulfilled, (state, { payload }) => {
                state.getLoading = false
                state.product = payload
            })
            .addCase(getUserProductById.rejected, (state, { payload }) => {
                state.getLoading = false
                state.getAdError = payload
            }).addCase(getProductByCategoryName.pending, (state, { payload }) => {
                state.products = []
                state.getLoading = true
            })
            .addCase(getProductByCategoryName.fulfilled, (state, { payload }) => {
                state.getLoading = false
                state.products = payload
            })
            .addCase(getProductByCategoryName.rejected, (state, { payload }) => {
                state.getLoading = false
                state.getAdError = payload
            }).addCase(getSearchedProducts.pending, (state, { payload }) => {
                state.products = []
                state.getLoading = true
            })
            .addCase(getSearchedProducts.fulfilled, (state, { payload }) => {
                state.getLoading = false
                state.products = payload
            })
            .addCase(getSearchedProducts.rejected, (state, { payload }) => {
                state.getLoading = false
                state.getAdError = payload
            })
    }
})
export default productSlice.reducer;