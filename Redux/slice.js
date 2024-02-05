import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navData : {
        isOpen : false,
        hamOpen : false,
        list : ["Action", "Horror", "SciFy"],
        home : false,
        movie : false,
        cat : false,
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
            }        
        },
        changeHome : (state, action)=>{
            state.navData.home = action.payload
        },
        changeMovie : (state, action)=>{
            state.navData.movie = action.payload
        },
        changeCat : (state, action)=>{
            state.navData.cat = action.payload
        },
    }
})

export const {changeIsOpen, changeHamOpen, changeCat, changeHome, changeMovie} = Slice.actions

export default Slice.reducer