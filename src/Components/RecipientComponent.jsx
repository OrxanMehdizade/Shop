
import React, {useEffect, useState} from 'react';
import {getFetchMyBag} from '../store/fetchs'
import {useDispatch,useSelector} from "react-redux";
import { Button, Form, Input,InputNumber } from 'antd';
import '../StyleCss/basket.css'
import {color} from "framer-motion";

const RecipientComponent = () => {
    const basketArray=useSelector((state)=>state.mySliceName.myBagArray);
    const dispatch=useDispatch();
    const [flag,setFlag]=useState(true);
    const [totalPrice,setTotalPrice]=useState('5')
    const getData=()=>{
        dispatch(getFetchMyBag())
    }
    useEffect(() => {
        getData()
    }, [dispatch,flag]);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {console.log('Failed:', errorInfo);};

    const handleKeyDown = (e) => {
        e.preventDefault();
    };
    return(
        <div className='basketMainDiv' >
            <div className='basketDivCss'>
                <ul className='basketUlCss'>
                    {basketArray.slice()
                        .sort((a, b) => parseFloat(a.product_price) - parseFloat(b.product_price))
                        .map((item)=>(
                            <li className='basketLiCss'>
                                <h2>{item.product_name}</h2>
                                <p>{item.product_description}</p>
                                <p>{item.store_name}</p>
                                <p>{item.store_address}</p>
                                <p>{item.product_price} $</p>
                                <InputNumber type="number" min={1} onKeyDown={handleKeyDown}/>
                            </li>
                        ))}
                </ul>
                <Button
                    style={{background:"orange",marginLeft:'40%',marginTop:'10px'}}
                    type='primary'>Empty The Product</Button>

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

                <h1 style={{color:"white",textAlign:'center',marginBottom:'10px'}}>Order Form</h1>
                <Form.Item
                    label={<span style={{ color: "white", fontSize: '13px', marginRight: '50px' }}>Name LastName </span>}
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
                    ]}
                >
                    <Input name="nameLastName" />
                </Form.Item>


                <Form.Item
                    label={<span style={{color:"white",fontSize:'13px', marginRight:'50px'}}>Telefon Number</span>}
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: '(Example: +994 55 500 90 88)',
                        }, {
                            pattern: /^\+[1-9]\d{2}\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
                            message: 'Your phone was stupid !'},]}>
                    <Input type="tel" name="phoneNumber"  />
                </Form.Item>

                <Form.Item label={<span style={{color:"white",fontSize:'13px', marginRight:'50px'}}>Address</span>}
                    name="address" rules={[{required: true, message: 'Please input your address!',},]}>
                    <Input.TextArea name="address" />
                </Form.Item>

                <h3 style={{color:"white",textAlign:'center',paddingLeft:'105px'}}>Total Price: {totalPrice}</h3>
                <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
                    <Button style={{background:"orange",marginTop:'10px',width:'150px'}} type="primary" htmlType="submit" >
                        Checkout
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default RecipientComponent;
