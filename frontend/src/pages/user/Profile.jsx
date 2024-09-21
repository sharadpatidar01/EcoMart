import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Profile() {
    //context
    const [auth, setAuth] = useAuth()
    //state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    //get user data
    useEffect(() => {
        const { email, name, phone, address, password } = auth?.user
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
        setPassword(password);
    }, [auth?.user]);

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, {
                name,
                email,
                password,
                phone,
                address,
            });
            if (data?.error) {
                toast.error(data?.error)
            } else {
                setAuth({ ...auth, user: data?.updatedUser })
                let ls = localStorage.getItem("auth")
                ls = JSON.parse(ls)
                ls.user = data.updatedUser;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile updated Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        };
    };

    return (
        <Layout title={"Your Profile - EcoMart"}>
            <div className="container-fluid p-3 m-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div>
                            <div className="form_cnt">
                                <form onSubmit={handleSubmit}>
                                    <h4 className='title'>USER PROFILE</h4>

                                    <div className="form-floating mb-3">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInputName" placeholder="Name" />
                                        <label htmlFor="floatingInputName"> Enter Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="Email" disabled />
                                        <label htmlFor="floatingInput"> Enter Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Enter Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="floatingInputPhone" placeholder="Phone" />
                                        <label htmlFor="floatingInputPhone"> Enter Contact no.</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="floatingInputAddress" placeholder="Address" />
                                        <label htmlFor="floatingInputAddress"> Enter Address</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
