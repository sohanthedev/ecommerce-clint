import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path="login"}) => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate(`${path}`, {state: location.pathname})

        return () => clearInterval(interval)
    },[count, navigate, location,path])
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-center'>redirection to you in {count} seconds</h1>
            <span className="text-center loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default Spinner;