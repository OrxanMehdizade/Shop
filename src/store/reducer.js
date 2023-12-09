import {createSlice} from "@reduxjs/toolkit";

const shopSlice=createSlice({
    name:'mySliceName',
    initialState:{
        goodsArray:[],
        myBagArray:[],
        ordersArray:[],
        addMyBag:[],
    },
    reducers:{
        getGoodsArray:(state,action)=>{
            return {...state,goodsArray: action.payload}
        },
        getMyBagArray:(state,action)=>{
            return {...state,myBagArray: action.payload}
        },
        getOrdersArray:(state,action)=>{
            return {...state,ordersArray: action.payload}
        },
        getGoodsSearch(state,action){
            return { ...state, goodsArray: action.payload };
        },
        postMyBagAdd:(state,action)=>{
            return { ...state, addMyBag: action.payload };
        }

    }
})

export const {getGoodsArray
    ,getOrdersArray
    ,getMyBagArray,
    getGoodsSearch,
    postMyBagAdd}=shopSlice.actions
export default shopSlice.reducer