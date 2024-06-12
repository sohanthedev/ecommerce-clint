import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";


const ForgotPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate()
  
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8081/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer

            })
            if (res.data.message) {
                toast.success(res.data.message)
                navigate( "/login")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
    }

    return (
        <Layout title="">
            <div className="bg-base-200">
                <h1 className="text-xl text-center font-bold">forgot password</h1>
                <div className="hero min-h-screen">


                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="input input-bordered" required />
                            </div>  
                            <div className="form-control">
                                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="what is your favourite color" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="enter your password" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                
                                <button className="btn btn-primary">reset</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default ForgotPassword;