import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppFlow, PAGE } from "./types";

export const appFlow = createSlice({
    name: "APP_FLOW",
    initialState: {
        page: PAGE.HOME
    } as AppFlow,
    reducers: {
        update: (state, { payload: page }: PayloadAction<PAGE>) => {
            state.page = page;
            return state;
        }
    }
});

export const APP_FLOW_ACTIONS = appFlow.actions;
