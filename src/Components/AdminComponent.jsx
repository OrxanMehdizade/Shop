import React, { useEffect,useState } from 'react';
import {getFetchGoods, getFetchAdminSearch, getFetchOrders,editFetchAdmin,deleteFetchAdmin,postFetchAdminAdd} from '../store/fetchs';
import { useDispatch, useSelector } from 'react-redux';
import '../StyleCss/AdminStyle.css'
import {Button, Input, Select, Form, Image, notification} from "antd";
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
    const [showAdmin,setShowAdmin]=useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [price,setPrice]=useState(null)
    const [editObj,setEditObj]=useState({})
    const [addAdmin,setAddAdmin]=useState({
        product_name:'',
        product_description:'',
        store_name:'',
        store_address:'',
        product_price:'',
        product_image:'',
    })
    function getGoodsData() {
        dispatch(getFetchGoods());
    }

    const openNotification=(placement)=>{
        notification.success({
            message: 'The operation was successful',
            placement: placement,
        });

    }

    const onFinish = (values) => {console.log('Success:', values);};
    const onFinishFailed = (errorInfo) => {console.log('Failed:', errorInfo);};
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
                <Button id='addCssId' onClick={()=>setShowAdmin(true)}>Add</Button>
                <Button id='basketButton' onClick={()=>setShowOrder(true)}></Button>
            </div>
            <div className='adminDiv'>
                <ul className='adminUl'>
                    {handleSorting(sorting).map((item)=>(
                        <li className='adminLi'>
                            <Image id='imgAdminId' src={item.product_image}/>
                            <div>
                                <p>{item.product_name}</p>
                                <p>{item.product_description}</p>
                                <p>{item.store_name}</p>
                                <p>{item.store_address}</p>
                                <p>{item.product_price} $</p>
                                <Button id='editCss' onClick={()=> {
                                    setEditObj(item)
                                    setModalIsOpen(true)
                                }}>Edit</Button>
                                <Button id='deleteCss' onClick={()=>{
                                    dispatch(deleteFetchAdmin(item))
                                    setFlag(!flag)
                                    openNotification('bottom');
                                }}>Delete</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {
                <Modal className='modalOrdersCss' isOpen={showOrder}>
                    <div className='modalObjDivCss'>
                        <ul className='modalObjUl'>
                            {ordersArray.map((order, index) => (
                                <li className='modalLi' key={index}>
                                    <div className='liDivUserCss'>
                                        <h2 id='userH2Id'>User Order</h2>
                                        <p id='objPId'>Name LastName: {order.name_LastName}</p>
                                        <p id='objPId'>Phone Number: {order.phone_Number}</p>
                                        <p id='objPId'>Address: {order.address}</p>

                                    </div>
                                    {order.obj.map((product, prodIndex) => (
                                        <div className='productCssMainDiv' key={prodIndex}>
                                            <Image id='imgProductId' src={product.product_image}/>
                                            <div className='liDivProductCss'>
                                                <p>{product.product_name}</p>
                                                <p>{product.product_description}</p>
                                                <p>{product.store_name}</p>
                                                <p>{product.store_address}</p>
                                                <p>{product.quantity}</p>
                                                <p>{product.product_price} $</p>
                                            </div>
                                        </div>
                                    ))}
                                </li>
                            ))}
                            <Button id='modalOrdersExit' onClick={()=>setShowOrder(false)}>Exit</Button>

                        </ul>
                    </div>
                </Modal>
                }










                {
                <Modal className='modalOrdersCss' isOpen={showAdmin}>
                    <div className='modalAdminDivCss'>
                        <Form
                            name="basic"
                            className='FormAdminCss'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">

                            <h1 id='h1OrderCss'>Admin Form</h1>

                            <Form.Item
                                label={<span id='productNameCss'>Product Name</span>}
                                name="product_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the product name!',
                                    },
                                ]}>
                                <Input name="product_name" onChange={(e) => setAddAdmin({ ...addAdmin, 'product_name': e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                label={<span id='productDescriptionCss'>Product Description</span>}
                                name="product_description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the product description!',
                                    },
                                ]}>
                                <Input.TextArea name="product_description" onChange={(e) => setAddAdmin({ ...addAdmin, 'product_description': e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                label={<span id='storeNameCss'>Store Name</span>}
                                name="store_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the store name!',
                                    },
                                ]}>
                                <Input name="store_name" onChange={(e) => setAddAdmin({ ...addAdmin, 'store_name': e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                label={<span id='storeAddressCss'>Store Address</span>}
                                name="store_address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the store address!',
                                    },
                                ]}>
                                <Input.TextArea name="store_address" onChange={(e) => setAddAdmin({ ...addAdmin, 'store_address': e.target.value })} />
                            </Form.Item>


                            <Form.Item
                                label={<span id='productPriceCss'>Product Price</span>}
                                name="product_price"
                                rules={[
                                    {
                                        required: true,
                                        type: 'number',
                                        message: 'Please input the product price!',
                                    },
                                ]}>
                                <Input type="number" name="product_price" onChange={(e) => setAddAdmin({ ...addAdmin, 'product_price': e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                label={<span id='productImageCss'>Product Image</span>}
                                name="product_image"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the product image URL!',
                                    },
                                ]}>
                                <Input name="product_image" onChange={(e) => setAddAdmin({ ...addAdmin, 'product_image': e.target.value })} />
                            </Form.Item>
                            <Button id='addExitBtn' type="primary" htmlType="button"
                                    onClick={() => {
                                        dispatch(postFetchAdminAdd(addAdmin))
                                        setFlag(!flag)
                                        setShowAdmin(false)
                                        openNotification('bottom');
                                    }}>
                                Add Admin
                            </Button>
                            <Button id='addExitBtn' onClick={() => setShowAdmin(false)}>
                                Exit
                            </Button>
                        </Form>
                    </div>
                </Modal>
            }





            {
                <Modal className='modalEditCss' isOpen={modalIsOpen}>
                    <div className='modalDivCss'>
                        <Input type='text' placeholder='Edit Price...'   onChange={(e) => setPrice(e.target.value)}/>
                        <Button id='editExitBtn' onClick={() => {
                            dispatch(editFetchAdmin(editObj, price));
                            setModalIsOpen(false);
                            setFlag(!flag)
                            openNotification('bottom');

                        }}>Edit</Button>

                        <Button id='editExitBtn' onClick={()=>setModalIsOpen(false)}>Exit</Button>

                    </div>
                </Modal>}
        </div>
    );
};

export default AdminComponent;
