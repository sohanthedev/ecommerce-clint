import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Header = () => {
    const [auth, setAuth] = useAuth();
    const hendleLogout = () => {
        setAuth({ ...auth, user: null, token: "" });
        localStorage.removeItem("auth");
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/"	>Home</Link></li>


                        <li><Link to="/about"	> About</Link></li>
                        <li><Link to="/contact"	>Contact Us</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/"	>Home</Link></li>
                                             
                   
                    <li><Link to="/about"	> About</Link></li>
                    <li><Link to="/contact"	>Contact Us</Link></li>
                    {
                        !auth.user ? <>
                        {/* <li><Link to="/register">Register</Link></li> 
                        <li><Link to="/login">Login</Link></li> */}
                            <li className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="">Click</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                    <li><Link to="/register">Register</Link></li> 
                        <li><Link to="/login">Login</Link></li>
                                </ul>
                            </li>
                        </> : 
                            <li className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="">{auth?.user?.name}</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                    <li><NavLink to={`/dashboard/${auth?.user?.role == 1 ? 'admin' : 'user'}`}>Dashboard</NavLink></li>
                                    <li><Link onClick={hendleLogout} to="/login">LogOut</Link></li>
                                </ul>
                            </li>
                        // <li><Link onClick={hendleLogout} to="/login">LogOut</Link></li>
                    }
                  
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;