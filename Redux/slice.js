import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navData : {
        isOpen : false,
        hamOpen : false,
        list : ["Action", "Horror", "SciFy"],
    }
}

const Slice = createSlice({
    name: 'State',
    initialState,
    reducers : {
        changeIsOpen : (state, action)=>{
            if(action.payload === true || action.payload === false){
                state.navData.isOpen = action.payload
            }
            else{
                state.navData.isOpen = !state.navData.isOpen
            }
        },
        changeHamOpen : (state, action)=>{
            if(action.payload === true || action.payload === false){
                state.navData.hamOpen = action.payload
            }
            else{
                state.navData.hamOpen = !state.navData.hamOpen
            }        }
    }
})

export const {changeIsOpen, changeHamOpen} = Slice.actions

export default Slice.reducer