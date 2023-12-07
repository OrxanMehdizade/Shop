
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFetchGoods} from "../store/fetchs";
import '../StyleCss/GoodsStayle.css'

const GoodComponent = () => {
    let goodsArray=useSelector((state)=>state.mySliceName.goodsArray)
    let [flag,setFlag]=useState(false)
    let dispatch=useDispatch()
    useEffect(() => {
        dispatch(getFetchGoods())
    }, [dispatch,flag]);
    return(
        <div>
            <input id='searchTxtİD' placeholder='Goods Search...' type="search" />
            <div className='GoodsCssCompDiv'>
                <ul>
                    {goodsArray.map((item)=>{
                        return(
                            <li>
                                <p>{item.product_name}</p>
                                <p>{item.product_description}</p>
                                <p>{item.product_price}</p>
                                <p>{item.store_name}</p>
                                <p>{item.store_address}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default GoodComponent;
