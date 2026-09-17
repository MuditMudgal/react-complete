import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        reset(state) {
            state.value = 0;
        },
        incrementByAmount(state, action) {
            state.value += Number(action.payload);
        },
    },
});

export const { increment, decrement, reset , incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
