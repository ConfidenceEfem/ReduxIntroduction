import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    value: 0,
};
const MainGlobal = createSlice({
    name: "MainGlobal",
    initialState,
    reducers: {
       addCount: (state)=>{
            state.value += 1
       },
       minusCount: (state)=>{
           state.value -= 1
       }
    }
})

export const {
addCount, minusCount
} = MainGlobal.actions;
export default MainGlobal.reducer