import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navData : {
        isOpen : false,
        hamOpen : false,
        list : [
            {
                genre : "Action",
                id : 28
            },
            {
                genre : "Adventure",
                id : 12
            },
            {
                genre : "Comedy",
                id : 35
            },
            {
                genre : "Drama",
                id : 18
            },
            {
                genre : "Animation",
                id : 16
            },
            {
                genre : "Family",
                id : 10751
            },
            {
                genre : "Crime",
                id : 80
            },
            {
                genre : "Documentary",
                id : 99
            }
        ]
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
    }
})

export const {changeIsOpen, changeHamOpen, changeCat, changeHome, changeMovie} = Slice.actions

export default Slice.reducer