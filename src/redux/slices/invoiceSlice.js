import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    data: []
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        setInvoiceData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setInvoiceData
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
