import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'

export default function Contact() {
    return (
        <Layout title={"Contact us - EcoMart"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img src='../images/contact.jpeg' alt='contact us' style={{ width: "100%" }}></img>
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Any query and info about product feel free to call anytime we are 24X7 available
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecomart.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll-free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}
