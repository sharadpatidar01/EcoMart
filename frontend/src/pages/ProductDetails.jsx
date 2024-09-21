import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/productDetailsStyles.css";
import { useCart } from '../context/cart';
import { toast } from 'react-hot-toast';

export default function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [cart, setCart] = useCart();

    //intial product details
    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug])
    //get products
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error)
        }
    }

    //get similar products
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`);
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout>
            <div className="row container product-details">
                <div className="col-md-6">
                    <img src={process.env.REACT_APP_API + `/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} height="400px" />
                </div>

                <div className="col-md-6  product-details-info ">
                    <h1 className="product_dheading ">
                        Product Details
                    </h1>
                    {/* {product?.map((p) => ( */}
                    <div>
                        <h6>Name : {product.name}</h6>
                        <h6>Description : {product.description}</h6>
                        <h6>Price : {product?.price?.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                        })}</h6>
                        <h6>Category : {product.category?.name}</h6>
                        <button className='btn btn-dark ms-1 mt-3' onClick={() => {
                            setCart([...cart]);
                            localStorage.setItem('cart', JSON.stringify([...cart]));
                            toast.success('Item Added to Cart')
                        }}>Add to Cart</button>
                    </div>
                    {/* ))} */}
                </div>
            </div>
            <div className="row container mt-5 similar-products">
                <h4>Similar products</h4>
                {relatedProducts.length < 1 && (<p className='text-center'>No Similar Products found</p>)}
                <div className="d-flex flex-wrap">
                    {relatedProducts?.map((p) => (
                        <div className="card m-2" key={p._id}>
                            <img src={process.env.REACT_APP_API + `/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                            <div className="card-body">
                                <div className="card-name-price">
                                    <h5 className="card-title">{p.name}</h5>
                                    <h5 className="card-title card-price">
                                        {p.price.toLocaleString("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                        })}
                                    </h5>
                                </div>
                                <p className="card-text">{p.description.substring(0, 30)}</p>
                                <div className="card-name-price">
                                    <button className="btn-info btn ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                    <button className="btn btn-secondary ms-1">Add to cart</button>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </Layout>

    )
}
