import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

export default function Pagenotfound() {
    return (
        <Layout title={"Go back - Page not found"}>
            <div className="pnf">
                <h1 className="pnf_title">
                    404
                </h1>
                <h2 className="pnf_heading">
                    Oops! Page Not Found
                </h2>
                <Link to="/" className='pnf_btn'>Go Back</Link>
            </div>
        </Layout>
    )
}
