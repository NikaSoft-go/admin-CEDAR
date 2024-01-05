import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    data: []
};

export const jobInvoice = createSlice({
    name: "jobInvoice",
    initialState,
    reducers: {
        setJobInvoiceData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setJobInvoiceData
} = jobInvoice.actions;

export default jobInvoice.reducer;
