import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    report: {
        "page-one-bannerBottom": 9,
        "page-one-coverBottom": 13,
        "lifting-sectionDetails": 9,
        "normal-sectionDetails": 9,
        "checklist-asset-table": 9,
        "lifting-items": 9,
        "lifting-asset-details": 9,
        "lifting-info": 15,
        "lifting-visual": 10,
        "normal-visual": 10,
        "lifting-comment": 10,
        "normal-comment": 10,
        "lifting-images": 10,
        "welding-images": 10,
        "normal-images": 10,
        "lifting-bottom": 10,
        "welding-bottom": 10,
        "normal-bottom": 10,
        "ut-bottom": 10,
        "lifting-checklists": 15,
        "lifting-sub-reports": 15,
        "lifting-checklists-bottom": 15,
        "normal-assetDetails": 9,
        "normal-dimension-details": 9,
        "normal-report-data": 9,
        "normal-equipment": 9,
        "normal-consumables": 9,
        "normal-key-section": 9,
    }
};

export const reportSpacingSlice = createSlice({
    name: "reportSpacing",
    initialState,
    reducers: {
        setReportSpacing: (state, action) => {
            state.report[action.payload.name] = action.payload.value;
        },
        clearSpacing: (state) => {
            Object.assign(state, initialState);
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    setReportSpacing,
    clearSpacing
} = reportSpacingSlice.actions;

export default reportSpacingSlice.reducer;
