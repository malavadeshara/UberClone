import React, {useContext, useEffect} from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const { isLoading, setIsLoading } = useContext(CaptainDataContext);

    useEffect(() => {
        if(!token) {
            navigate('/Captain-login');
        }
    }, [ token ]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            setIsLoading(false);
        }
    }).catch((error) => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/Captain-login');
    });

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default CaptainProtectWrapper;