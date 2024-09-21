import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'
import { useCart } from '../context/cart'
import { useNavigate } from 'react-router-dom'
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import toast from 'react-hot-toast';
import '../styles/cartstyle.css'

export default function CartPage() {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //Total Price
    const totalPrice = () => {
        try {
            let total = 0
            cart?.map(item => { total = total + item.price })
            return total.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
            })
        } catch (error) {
            console.log(error)
        }
    }
    //delete item
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem('cart', JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    }
    //get payement gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/braintree/token`);
            setClientToken(data?.clientToken)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getToken();
    }, [auth?.token]);

    //handel payments
    const handlePayment = async () => {
        try {
            setLoading(true)
            const { nonce } = await instance.requestPaymentMethod()
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/braintree/payment`, { nonce, cart });
            setLoading(false);
            localStorage.removeItem('cart');
            setCart([]);
            navigate('/dashboard/user/orders');
            toast.success('Payment Completed Successfully');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }

    return (
        <Layout>
            <div className="cart-page">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center bg-light p-2 mb-1">
                            {!auth?.user
                                ? "Hello Guest"
                                : `Hello  ${auth?.token && auth?.user?.name}`}
                            <p className="text-center">
                                {cart?.length ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"}` : " Your Cart Is Empty"}
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row cart_main">
                        <div className="col-md-8 p-0 m-0 cart_p" >
                            {cart?.map((p) => (
                                <div className="row mb-2 p-3 card flex-row" key={p._id}>
                                    <div className="col-md-4">
                                        <img src={process.env.REACT_APP_API + `/api/v1/product/product-photo/${p._id}`} className="card-img-top cart_img" alt={p.name} />
                                    </div>
                                    <div className="col-md-4">
                                        <p>{p.name}</p>
                                        <p>{p.description.substring(0, 30)}</p>
                                        <p>Price : {p.price}</p>
                                        <select class="form-select cart_select" aria-label="Default select example" >
                                            <option selected>Quantity</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                            <option value="6">Six</option>
                                            <option value="7">Seven</option>
                                            <option value="8">Eight</option>
                                            <option value="9">Nine</option>
                                            <option value="10">Ten</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 cart-remove-btn">
                                        <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4 text-center card cart-summary">
                            <div className="summary_title">
                                <h2>Cart Summary</h2>
                                <p>Total | Checkout | Payment</p>
                            </div>
                            <h4 className='mt-3'>Total : {totalPrice()} </h4>
                            {auth?.user?.address ? (
                                <>
                                    <div className="mb-3">
                                        <h4>Current Address</h4>
                                        <h5>{auth?.user?.address}</h5>
                                        <button className='btn btn-outline-warning mt-3' onClick={() => navigate('/dashboard/user-profile')}>Update Address</button>
                                    </div>
                                </>
                            ) : (
                                <div className="mb-3">
                                    {
                                        auth?.token ? (
                                            <button className="btn btn-outline-warning" onClick={() => navigate('/dashboard/user-profile')}>Update Address</button>
                                        ) : (
                                            <button className="btn btn-outline-warning" onClick={() => navigate('/login', { state: "/cart", })} >Please Login to checkout</button>
                                        )
                                    }
                                </div>
                            )}
                            <div className="m-3">
                                {
                                    !clientToken || !auth?.token || !cart?.length ? (
                                        ""
                                    ) : (
                                        <>
                                            <DropIn
                                                options={{
                                                    authorization: clientToken,
                                                    paypal: {
                                                        flow: "vault",
                                                    },
                                                }}
                                                onInstance={(instance) => setInstance(instance)}
                                            />
                                            <button className='btn btn-primary' onClick={handlePayment} disabled={!loading || !instance || !auth?.user?.address}>
                                                {loading ? "Processing ...." : "Make Payment"}
                                            </button>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
