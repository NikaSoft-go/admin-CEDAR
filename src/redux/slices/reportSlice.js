import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    data: []
};

export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        setReportData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setReportData
} = reportSlice.actions;

export default reportSlice.reducer;
