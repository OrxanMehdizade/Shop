import {configureStore} from "@reduxjs/toolkit";
import shopSlice from './reducer'

let store=configureStore({
    reducer:{
        mySliceName:shopSlice
    }
})

export default store