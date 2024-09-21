import React, { useState } from 'react';
import '../../styles/authstyle.css'
import Layout from '../../components/layout/Layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
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
        <Layout title={"Register - EcoMart"}>
            <div className="form_cnt">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>REGISTER FORM</h4>

                    <div className="form-floating mb-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInputName" placeholder="name" required />
                        <label htmlFor="floatingInputName"> Enter Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="Email" required />
                        <label htmlFor="floatingInput"> Enter Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Enter Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="floatingInputPhone" placeholder="Mobile no." required />
                        <label htmlFor="floatingInputPhone"> Enter Contact no.</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="floatingInputAddress" placeholder="Address" required />
                        <label htmlFor="floatingInputAddress"> Enter Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="floatingInputAddress" placeholder="Color" required />
                        <label htmlFor="floatingInputAns"> What is your favorite color</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout >
    )
}

