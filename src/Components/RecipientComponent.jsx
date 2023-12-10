import React, {useEffect, useState} from 'react';
import {getFetchMyBag,postFetchOrdersAdd} from '../store/fetchs'
import {useDispatch,useSelector} from "react-redux";
import { Button, Form, Input,InputNumber } from 'antd';
import '../StyleCss/basket.css'


const RecipientComponent = () => {
    const basketArray=useSelector((state)=>state.mySliceName.myBagArray);
    const dispatch=useDispatch();
    const [flag,setFlag]=useState(false);
    const [totalPrice,setTotalPrice]=useState('')
    const [orderArray, setOrderArray] = useState({
        name_LastName: '',
        phone_Number: '',
        address: '',
        obj:[],
    });
    console.log(orderArray.obj)

    const handleCheckout = async () => {
        try {
            await dispatch(postFetchOrdersAdd(orderArray));
            setFlag(!flag);
        } catch (error) {
            console.error('Error adding order:', error);
            // Handle error, show a message to the user, etc.
        }
    };


    console.log(orderArray)
    const getData=()=>{
        dispatch(getFetchMyBag())
    }
    useEffect(() => {
        getData()
    }, [dispatch,flag]);

    const onFinish = (values) => {console.log('Success:', values);};
    const onFinishFailed = (errorInfo) => {console.log('Failed:', errorInfo);};

    const handleKeyDown = (e) => { e.preventDefault();};
    return(
        <div className='basketMainDiv' >
            <div className='basketDivCss'>
                <ul className='basketUlCss'>
                    {basketArray.slice()
                        .sort((a, b) => parseFloat(a.product_price) - parseFloat(b.product_price))
                        .map((item,index)=>(
                            <li key={index} className='basketLiCss'>
                                <h2>{item.product_name}</h2>
                                <p>{item.product_description}</p>
                                <p>{item.store_name}</p>
                                <p>{item.store_address}</p>
                                <p>{item.product_price} $</p>
                                <InputNumber type="number"
                                             min={1}
                                             onKeyDown={handleKeyDown}

                                />
                            </li>
                        ))}
                </ul>
                <Button id='emptyBtnCss' type='primary'>Empty The Product</Button>

            </div>

            <Form
                name="basic"
                className='FormCss'
                labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">

                <h1 id='h1OrderCss'>Order Form</h1>
                <Form.Item
                    label={<span id='nameLastNameCss'>Name LastName </span>}
                    name="nameLastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name and Last Name!',
                        },
                        {
                            validator: (_, value) => {
                                const names = value.split(' ');
                                const minLength = 5;
                                const maxLength = 20;

                                if (names.length !== 2) {
                                    return Promise.reject('Please enter both Name and Last Name!');
                                }

                                const [name, lastName] = names;

                                if (name.length < minLength || lastName.length < minLength) {
                                    return Promise.reject(`Name and Last Name must be at least ${minLength} characters!`);
                                }

                                if (name.length > maxLength || lastName.length > maxLength) {
                                    return Promise.reject(`Name and Last Name must be at most ${maxLength} characters!`);
                                }

                                return Promise.resolve();
                            },
                        }
                    ]}>
                    <Input name="nameLastName" onChange={(e)=>setOrderArray({ ...orderArray, 'name_LastName': e.target.value })} />
                </Form.Item>


                <Form.Item
                    label={<span id='phoneNumberCss' >Telefon Number</span>}
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: '(Example: +994 55 500 90 88)',
                        }, {
                            pattern: /^\+[1-9]\d{2}\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
                            message: 'Your phone was stupid !'},]}>
                    <Input type="tel" name="phoneNumber" onChange={(e)=>setOrderArray({ ...orderArray, 'phone_Number': e.target.value })}  />
                </Form.Item>

                <Form.Item label={<span id='addressCss'>Address</span>}
                           name="address" rules={[{required: true, message: 'Please input your address!',},]}>
                    <Input.TextArea name="address" onChange={(e)=>setOrderArray({ ...orderArray, 'address': e.target.value })}  />
                </Form.Item>

                <h3 id='totalPriceCss'>Total Price: {totalPrice}</h3>
                <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
                    <Button id='checkOutCss' type="primary" htmlType="submit" onClick={handleCheckout} >
                        Checkout
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default RecipientComponent