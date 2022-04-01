import {createSlice} from "@reduxjs/toolkit"

const InputReducer = createSlice({
    name: "InputReducer",
    initialState: {
        name: "",
        email: "",
    },
    reducers: {
        myName: (state, action)=>{
            state.name = action.payload
        },
        myEmail: (state, {payload})=>{
            state.email = payload
        }
    }
})

export const {myName, myEmail} = InputReducer.actions
export default InputReducer.reducer
