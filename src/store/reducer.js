import {createSlice} from "@reduxjs/toolkit";

const shopSlice=createSlice({
    name:'mySliceName',
    initialState:{
        goodsArray:[],
    },
    reducers:{
        getGoodsArray:(state,action)=>{
            return {...state,goodsArray: action.payload}
        },
        getGoodsSearch(state,action){
            return { ...state, goodsArray: action.payload };
        }

    }
})

export const {getGoodsArray,getGoodsSearch}=shopSlice.actions
export default shopSlice.reducer