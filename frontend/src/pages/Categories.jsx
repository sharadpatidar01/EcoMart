import React, { useState, useEffect } from 'react';
import useCategory from '../hooks/useCategory';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

export default function Categories() {

    const categories = useCategory()
    return (
        <Layout title={'All Categories'}>
            <h1>All Categories</h1>
            <div className="container">
                <div className="row">
                    {categories.map((c) => (
                        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <div className="card">
                                <Link to={`/category/${c.slug}`} className='btn cat-btn'>
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
