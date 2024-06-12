import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth";
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8081/api/v1/auth/login", {
                email,
                password,
               
            })
            if (res.data.message) {
                toast.success(res.data.message)
                setAuth({ ...auth, token: res.data.token, user: res.data.user })
                localStorage.setItem("auth",JSON.stringify(res.data))
                navigate(location.state || "/")
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
        <Layout>
            <div className="bg-base-200">
                <h1 className="text-xl text-center font-bold">Login</h1>
                <div className="hero min-h-screen">


                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            
                            <div className="form-control">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="input input-bordered" required />

                            </div>
                           
                            <div className="form-control mt-6">
                                <div>
                                    <p className="btn " onClick={()=>{navigate("/forgot-password")}}>Forgot Password</p>
                                </div>
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Login;