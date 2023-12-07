import {createSlice} from "@reduxjs/toolkit";

const shopSlice=createSlice({
    name:'mySliceName',
    initialState:{
        goodsArray:[]
    },
    reducers:{
        getGoodsArray:(state,action)=>{
            return {...state,goodsArray: action.payload}
        }
    }
})

export const {getGoodsArray}=shopSlice.actions
export default shopSlice.reducer