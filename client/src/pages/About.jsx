import React from 'react'
import Layout from '../components/layout/Layout'

export default function About() {
    return (
        <Layout title={"About us - EcoMart"}>
            <div className="row about_us">
                <div className="col-md-6">
                    <img src='../images/about.jpeg' alt='contact us' style={{ width: "100%" }} />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
                    <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                        perferendis eius temporibus dicta blanditiis doloremque explicabo
                        quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                        accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                    </p>
                </div>
            </div>
        </Layout>
    )
}
