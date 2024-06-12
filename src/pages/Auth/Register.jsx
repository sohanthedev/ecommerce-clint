import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");	
    const [email, setEmail] = useState("");	
    const [phone, setPhone] = useState("");	
    const [address, setAddress] = useState("");	
    const [answer, setAnswer] = useState("");	
    const navigate = useNavigate()
    const handleRegister = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8081/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer
            })
            if(res.data.message) {
                toast.success(res.data.message) 
                navigate("/login")
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")	
        }
    }
   
    return (
        <Layout>
            <div className="bg-base-200">
                <h1 className="text-xl text-center font-bold">Register Page</h1>
                <div className="hero min-h-screen">
                        
                       
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="input input-bordered" required />
                                   
                                </div>
                            <div className="form-control">
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="enter your phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="enter your address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="what is your favorite color" className="input input-bordered" required />
                            </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">register</button>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>
        </Layout>
    );
};

export default Register;