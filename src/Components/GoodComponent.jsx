import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchGoods,postFetchAddMyBag,getFetchGoodsSearch } from "../store/fetchs";
import Modal from 'react-modal';
import {Button} from 'antd';

import '../StyleCss/GoodsStayle.css';

const GoodComponent = () => {
    const goodsArray = useSelector((state) => state.mySliceName.goodsArray);
    const checkAdd=useSelector((state)=>state.mySliceName.addMyBag)
    const [flag, setFlag] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();


    function getData(){
        dispatch(getFetchGoods());
    }

    function getSearchData(){
        dispatch(getFetchGoodsSearch(searchValue));
    }

    useEffect(() => {
        getData();
        getSearchData();

    }, [dispatch, flag]);



    const sortByCounts = (a, b) => {
        const counts = JSON.parse(localStorage.getItem('productCounts')) || {};
        const countA = counts[a.product_name] || 0;
        const countB = counts[b.product_name] || 0;
        return countB - countA;
    };

    const openModal = (product) => {
        localStorage.setItem('selectedProductGender', product.product_name);
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    };

    return (
        <div>
            <input id='searchTxtİD'
                   placeholder='Goods Search...'
                   type="search"
                   value={searchValue}
                   onChange={(e)=>{
                       setSearchValue(e.target.value)
                       setFlag(!flag)
                   }}

            />
            <div className='GoodsCssCompDiv'>
                <ul className='GoodsCssCompUl'>
                    {goodsArray
                        .slice()
                        .sort((a, b) => parseFloat(a.product_price) - parseFloat(b.product_price))
                        .sort(sortByCounts)
                        .map((item) => (
                        <li className='GoodsCssCompLi' key={item.id} >
                            <p onClick={() => openModal(item)}>{item.product_name}</p>
                            <p>{item.product_price} $</p>
                            <Button id='modalElementsId' onClick={()=>{
                                dispatch(postFetchAddMyBag(item))
                                setFlag(true)
                                console.log(checkAdd)
                            }}>Add Reciplent</Button>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {selectedProduct && (
                    <div className='modalDivCss'>
                        <h2 id='modalElementsId'>{selectedProduct.product_name}</h2>
                        <p id='modalElementsId'>{selectedProduct.product_description}</p>
                        <p id='modalElementsId'>{selectedProduct.store_name}</p>
                        <p id='modalElementsId'>{selectedProduct.store_address}</p>
                        <p id='modalElementsId'>{selectedProduct.product_price} $</p>
                        <Button id='modalElementsId' onClick={closeModal}>Close Modal</Button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default GoodComponent;
