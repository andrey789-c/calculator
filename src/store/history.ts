import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHistoryState } from "./history.interface";

const initialState: IHistoryState = {
	history: ['2323'],
};

export const historyReducer = createSlice({
	name: "history",
	initialState,
	reducers: {
		addHistory: (state, action: PayloadAction<string>) => {
			state.history = [...state.history, action.payload];
		},
    clearAll: (state) => {
      state.history = [];
    }
	},
});

export const {addHistory, clearAll} = historyReducer.actions