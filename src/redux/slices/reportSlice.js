import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    data: [],
    checklists: []
};

export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        setReportData: (state, action) => {
            state.data = action.payload;
        },
        setChecklists: (state, action) => {
            state.checklists = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setReportData,
    setChecklists
} = reportSlice.actions;

export default reportSlice.reducer;
