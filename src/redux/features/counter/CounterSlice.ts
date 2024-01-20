import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CounterState{
    count: number;
}

const initialState:CounterState ={
    count:10
}

const counterSlice=createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.count +=action.payload;
        },
        decrement:(state)=>{
            state.count -=2;
        }
    }
})

export const {increment,incrementByAmount,decrement}=counterSlice.actions;

export default counterSlice.reducer;