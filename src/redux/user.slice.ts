import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTENT_STATE = "userToken";
export interface UserPersistentState {
    token: string | null;
}
export interface UserState {
    token: string | null;
}
const initialState: UserState = {
    token: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.token ?? null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
        },
    },
});

export const { addToken } = userSlice.actions;
export default userSlice.reducer;
