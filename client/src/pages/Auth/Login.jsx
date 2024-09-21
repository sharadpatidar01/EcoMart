import React, { useState } from 'react';
import '../../styles/authstyle.css'
import Layout from '../../components/layout/Layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
            if (res && res.data.success) {
                toast.success(res.data.message);
                // alert("registed")
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || '/');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        };
    };
    return (
        <Layout title={"Login - EcoMart"}>
            <div className="form_cnt">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>LOGIN FORM</h4>

                    <div className="form-floating mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="Email" required />
                        <label htmlFor="floatingInput"> Enter Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>
                            Forgot Password</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </Layout >
    )
}

