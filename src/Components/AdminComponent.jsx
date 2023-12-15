import React, { useEffect,useState } from 'react';
import {getFetchGoods, getFetchAdminSearch, getFetchOrders,editFetchAdmin,deleteFetchAdmin} from '../store/fetchs';
import { useDispatch, useSelector } from 'react-redux';
import '../StyleCss/AdminStyle.css'
import {Button, Input, Select, Alert, Image} from "antd";
import Modal from "react-modal";

const AdminComponent = () => {
    const goodsArray = useSelector((state) => state.mySliceName.goodsArray);
    const ordersArray = useSelector((state) => state.mySliceName.ordersArray);
    const editData=useSelector((state)=>state.mySliceName.editPrice)
    const deleteData=useSelector((state)=>state.mySliceName.deleteAdminData)
    const [sorting, setSorting] = useState(null);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);
    const [showOrder,setShowOrder]=useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [price,setPrice]=useState(null)
    const [editObj,setEditObj]=useState({})
    function getGoodsData() {
        dispatch(getFetchGoods());
    }

    function getOrdersData() {
        dispatch(getFetchOrders());
    }


    function getSearchData(){
        dispatch(getFetchAdminSearch(searchValue));
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




    const { Option } = Select;
    useEffect(() => {
        getGoodsData();
        getSearchData()
        getOrdersData();
    }, [dispatch, flag]);

    return (
        <div>
            <div className='SearchBtnCss'>
                <input id='searchAdminTxtİD'
                       placeholder='Admin Search...'
                       type="search"
                       value={searchValue}
                       onChange={(e)=>{
                           setSearchValue(e.target.value)
                           setFlag(!flag)
                       }}/>
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
                <Button onClick={()=>setShowOrder(true)}></Button>
            </div>
            <div className='adminDiv'>
                <ul className='adminUl'>
                    {handleSorting(sorting).map((item)=>(
                        <li className='adminLi'>
                            <Image id='imgAdminId' src={item.product_image}/>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.store_name}</p>
                            <p>{item.store_address}</p>
                            <p>{item.product_price}</p>
                            <Button id='editCss' onClick={()=> {
                                setEditObj(item)
                                setModalIsOpen(true)
                            }}>Edit</Button>
                            <Button id='deleteCss' onClick={()=>{
                                dispatch(deleteFetchAdmin(item))
                                setFlag(!flag)
                            }}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </div>

            {
                <Modal isOpen={showOrder}>
                    <div className='modalObjDivCss'>
                        <div className='modalObjDiv'>
                            <ul className='modalObjUl'>
                                {ordersArray.map((order, index) => (
                                    <li className='modalLi' key={index}>
                                        <h2 id='userH2Id'>User Order</h2>
                                        <p id='objPId'>Name LastName: {order.name_LastName}</p>
                                        <p id='objPId'>Phone Number: {order.phone_Number}</p>
                                        <p id='objPId'>Address: {order.address}</p>

                                        {order.obj.map((product, prodIndex) => (
                                            <div id='prodId' key={prodIndex}>
                                                <Image id='imgProductId' src={product.product_image}/>
                                                <p>{product.product_name}</p>
                                                <p>{product.product_description}</p>
                                                <p>{product.store_name}</p>
                                                <p>{product.store_address}</p>
                                                <p>{product.product_price} $</p>
                                            </div>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button onClick={()=>setShowOrder(false)}>Exit</Button>
                    </div>
                </Modal>
                }


            {
                <Modal isOpen={modalIsOpen}>
                    <div className='modalDivCss'>
                        <Input type='text' onChange={(e) => setPrice(e.target.value)}/>
                        <Button onClick={() => {
                            dispatch(editFetchAdmin(editObj, price));
                            setModalIsOpen(false);
                            setFlag(!flag)

                        }}>Edit</Button>

                        <Button onClick={()=>setModalIsOpen(false)}>Exit</Button>


                    </div>
                </Modal>}
        </div>
    );
};

export default AdminComponent;
