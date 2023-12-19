import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchGoods,postFetchAddMyBag,getFetchGoodsSearch } from "../store/fetchs";
import Modal from 'react-modal';
import {Button, Select, Image, notification} from 'antd';

import '../StyleCss/GoodsStayle.css';

const GoodComponent = () => {
    const goodsArray = useSelector((state) => state.mySliceName.goodsArray);
    const checkAdd=useSelector((state)=>state.mySliceName.addMyBag)
    const [flag, setFlag] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sorting, setSorting] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const { Option } = Select;
    const [api,contextHolder]=notification.useNotification()
    const openNotification=(placement,msg)=>{
        notification.success({
            message: 'Basket Add',
            description: msg,
            placement: 'bottom',
        });

    }


    function getData(){
        dispatch(getFetchGoods());
    }

    function getSearchData(){
        dispatch(getFetchGoodsSearch(searchValue));
    }

    const handleSorting = (sorting) => {
        const goodsArrayCopy = [...goodsArray];

        if (sorting === 'Ascending') {
            return goodsArrayCopy.sort((a, b) => a.product_price - b.product_price);
        } else if (sorting === 'Descending') {
            return goodsArrayCopy.sort((a, b) => b.product_price - a.product_price);
        }

        return goodsArrayCopy;
    };


    useEffect(() => {
        getData();
        getSearchData();

    }, [dispatch, flag]);




    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    };


    return (
        <div className='mainGoodsDiv'>
            <div className='SearchGoodBtnCss'>
                <input id='searchTxtİD'
                       placeholder='Goods Search...'
                       type="search"
                       value={searchValue}
                       onChange={(e)=>{
                           setSearchValue(e.target.value)
                           setFlag(!flag)
                       }}

                />
                <Select
                    className="custom-select"
                    defaultValue="Sorting"
                    onChange={(value) => {
                        setSorting(value)
                        setFlag(!flag)
                    }}
                    dropdownClassName="custom-dropdown"
                >
                    <Option value="Ascending" className="select-items">
                        Ascending
                    </Option>
                    <Option value="Descending" className="select-items">
                        Descending
                    </Option>
                </Select>
            </div>
            <div className='GoodsCssCompDiv'>
                <ul className='GoodsCssCompUl'>
                    {handleSorting(sorting).map((item) => (
                        <li className='GoodsCssCompLi' key={item.id} >
                            <Image id='imgGoodId' src={item.product_image}/>
                            <div>
                                <p id='nameModalClick' onClick={() => openModal(item)}>{item.product_name}</p>
                                <p>{item.product_price} $</p>
                                <Button id='addGoodBtnİd' onClick={()=>{
                                    dispatch(postFetchAddMyBag(item))
                                    setFlag(!flag)
                                    console.log(checkAdd)
                                    openNotification('bottom', checkAdd);
                                }}>Add Reciplent</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal className='Modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                {selectedProduct && (
                    <div className='modalDivCss'>
                        <Image id='imgModalId' src={selectedProduct.product_image}></Image>
                        <div className='pTagDiv'>
                            <h2 id='modalElementsId'>{selectedProduct.product_name}</h2>
                            <p id='modalElementsId'>{selectedProduct.product_description}</p>
                            <p id='modalElementsId'>{selectedProduct.store_name}</p>
                            <p id='modalElementsId'>{selectedProduct.store_address}</p>
                            <p id='modalElementsId'>{selectedProduct.product_price} $</p>
                            <Button id='modalBtnElementsId' onClick={closeModal}>Close Modal</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default GoodComponent;
