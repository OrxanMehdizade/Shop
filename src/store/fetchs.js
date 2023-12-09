import {getGoodsArray,getMyBagArray,getOrdersArray,getGoodsSearch,postMyBagAdd} from "./reducer";

export function getFetchGoods(){
    return function (dispatch){
        fetch('http://localhost:5000/goods')
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsArray(data)))
    }
}


export function getFetchMyBag(){
    return function (dispatch){
        fetch('http://localhost:5000/my-bag')
            .then(res=>res.json())
            .then(data=>dispatch(getMyBagArray(data)))
    }
}


export function getFetchOrders(){
    return function (dispatch){
        fetch('http://localhost:5000/orders')
            .then(res=>res.json())
            .then(data=>dispatch(getOrdersArray(data)))
    }
}

export function postFetchAddMyBag(object){
    return function (dispatch){
        fetch('http://localhost:5000/add-mybag',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(object)
        })
            .then(res=>res.text())
            .then(data=>postMyBagAdd(data))
    }
}


export function getFetchGoodsSearch(searchValue){
    return function (dispatch){
        fetch(`http://localhost:5000/search-goods/${searchValue}`)
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsSearch(data)))
    }
}