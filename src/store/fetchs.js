import {getGoodsArray,getGoodsSearch} from "./reducer";

export function getFetchGoods(){
    return function (dispatch){
        fetch('http://localhost:5000/goods')
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsArray(data)))
    }
}

export function getFetchGoodsSearch(searchValue){
    return function (dispatch){
        fetch(`http://localhost:5000/search-goods/${searchValue}`)
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsSearch(data)))
    }
}