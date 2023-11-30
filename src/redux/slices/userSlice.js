import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    access_token: "",
    refresh_token: "",
    first_name: "",
    last_name: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            Object.assign(state, action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUserData,
    setUserEmail,
    setUserTokens,
    setUserInfo,
    setLikedBlogs,
    setLikedDiscussions,
    resetUserData,
} = userSlice.actions;

export default userSlice.reducer;
