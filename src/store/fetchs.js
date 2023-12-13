import {getGoodsArray,
    getMyBagArray,
    getOrdersArray,
    getGoodsSearch,
    postMyBagAdd,
    postOrdersAdd,
    getAdminSearch,
    editAdmin,
    deleteAdmin,deleteRecipient} from "./reducer";

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
            .then(data=>dispatch(postMyBagAdd(data)))
    }
}

export function postFetchOrdersAdd(object){
    return function (dispatch){
        fetch('http://localhost:5000/add-orders',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(object)
        })
            .then(res=>res.text())
            .then(data=>dispatch(postOrdersAdd(data)))
    }
}


export function getFetchGoodsSearch(searchValue){
    return function (dispatch){
        fetch(`http://localhost:5000/search-goods/${searchValue}`)
            .then(res=>res.json())
            .then(data=>dispatch(getGoodsSearch(data)))
    }
}

export function getFetchAdminSearch(searchAdminValue){
    return function (dispatch){
        fetch(`http://localhost:5000/search-admin/${searchAdminValue}`)
            .then(res=>res.json())
            .then(data=>dispatch(getAdminSearch(data)))
    }

}

export function editFetchAdmin(editObj,price){
    let obj={...editObj,"product_price":price}
    return function (dispatch){
        fetch(`http://localhost:5000/change-admin/${editObj.id}`,
            {
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(obj)

            })
            .then(res=>res.text())
            .then(data=>dispatch(editAdmin(data)))
    }
}

export function deleteFetchAdmin(object){
    return function (dispatch){
        fetch(`http://localhost:5000/delete-admin/${object.id}`,{method:'DELETE'})
            .then(res=>res.text())
            .then(data=>dispatch(deleteAdmin(data)))
    }
}

export function deleteFetchRecipient(object){
    return function (dispatch){
        fetch(`http://localhost:5000/delete-mybag/${object.id}`,{method:'DELETE'})
            .then(res=>res.text())
            .then(data=>dispatch(deleteRecipient(data)))
    }
}