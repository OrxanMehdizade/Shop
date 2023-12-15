import {createSlice} from "@reduxjs/toolkit";

const shopSlice=createSlice({
    name:'mySliceName',
    initialState:{
        goodsArray:[],
        myBagArray:[],
        ordersArray:[],
        addMyBag:null,
        addOrders:null,
        editPrice:null,
        deleteAdminData:null,
        deleteRecipientData:null,
        deleteBasketRecipientData:null,
    },
    reducers:{
        getGoodsArray:(state,action)=>{
            return {...state,goodsArray: action.payload}
        },
        getMyBagArray:(state,action)=>{
            return {...state,myBagArray: action.payload}
        },
        getOrdersArray:(state,action)=>{
            return {...state, ordersArray: action.payload}
        },
        getGoodsSearch(state,action){
            return { ...state, goodsArray: action.payload };
        },
        postMyBagAdd:(state,action)=>{
            return { ...state, addMyBag: action.payload };
        },
        postOrdersAdd:(state,action)=>{
            return {...state, addOrders: action.payload}
        },
        getAdminSearch(state,action){
            return { ...state, goodsArray: action.payload };
        },
        editAdmin(state, action) {
            return { ...state, editPrice: action.payload };
        },
        deleteAdmin(state,action){
            return{...state,deleteAdminData:action.payload}
        },
        deleteRecipient(state,action){
            return{...state,deleteRecipientData:action.payload}
        },
        deleteBasketRecipient(state,action){
            return{...state,deleteBasketRecipientData: action.payload}
        }


    }
})

export const {getGoodsArray
    ,getOrdersArray
    ,getMyBagArray,
    getGoodsSearch,
    getAdminSearch,
    postMyBagAdd,
    postOrdersAdd,
    editAdmin,
    deleteAdmin,
    deleteRecipient,
    deleteBasketRecipient}=shopSlice.actions
export default shopSlice.reducer