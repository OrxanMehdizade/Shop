import {getGoodsArray} from "./reducer";

export function getFetchGoods(){
    return function (dispatch){
        fetch('http://localhost:5000/goods')
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsArray(data)))
    }
}