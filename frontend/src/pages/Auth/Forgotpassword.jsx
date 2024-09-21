import React, { useState } from 'react';
import '../../styles/authstyle.css'
import Layout from '../../components/layout/Layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Forgotpassword() {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email, newpassword, answer });
            if (res && res.data.success) {
                toast.success(res.data.message)
                // alert("registed")

                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        };
    };
    return (
        <Layout title={"Reset Password - EcoMart"}>
            <h1>Forgot Password</h1>
            <div className="form_cnt">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Reset Password</h4>

                    <div className="form-floating mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="Email" required />
                        <label htmlFor="floatingInput"> Enter Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="newpassword" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="floatingAns" placeholder="Answer" required />
                        <label htmlFor="floatingAns">Enter Your favorite color</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Reset Password</button>
                </form>
            </div>
        </Layout >
    )
}