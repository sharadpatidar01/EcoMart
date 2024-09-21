import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/categoryProductStyle.css"

export default function CategoryProduct() {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (params?.slug) getProductsByCategory()
    }, [params?.slug])
    const getProductsByCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout>
            <div className="container category">
                <h4 className='text-center'>Category - {category?.name}</h4>
                <h6 className='text-center'>{products?.length} Result found</h6>
                <div className="row">
                    <div className="col-md-9 offset-1">
                        <div className="d-flex flex-wrap">
                            {products?.map((p) => (
                                <div className="card m-2" key={p._id} >
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
                                            <button className="btn btn-info ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                            <button className="btn btn-dark ms-1">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        {/* <div className="m-2 p-3">
                        {products && products.length < total && (
                            <button className="btn btn-warning" onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                            }}
                            >
                                {loading ? "Loading ..." : "Loadmore"}
                            </button>
                        )}
                    </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
