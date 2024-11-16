// logo image
import logo from '../../public/3D logo.png'
// css file
import './Login.scss'
// axios
import axios from 'axios'
// react libraries
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
// import { useCookies } from 'react-cookie'

// user context
import UserContext from '../context/UserContext';


// icons
import { IoLogInOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
    const navigate = useNavigate()

    // const {user,fetch_data,isPending} = useContext(UserContext)
    const isPending = 0
    const fetch_data = 0
    const user = 0

    const location = useLocation()
    if (user) {
        return <Navigate to="/" state={{ from: location }} replace />
    }
    
    return (
        <>
            {
                <section className="main-section d-flex">
                    <div className="right-div d-flex align-items-center justify-content-center col-6">
                        <div className='w-75 h-75 px-3'>
                            <h2 className='mb-5'>Sign in</h2>
                            <form action="" method='dialog' className='px-3' onSubmit={async (e) => {
                                fetch_data(e)
                                if (user) {
                                    navigate('/')
                                }
                            }}>
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                    <input type="text" name="email" id="" placeholder='Enter Your Email' className='form-control py-2' />
                                </div>
                                <div>
                                    <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                    <input type="password" name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control py-2' />
                                </div>

                                <button type='submit' className='btn btn-primary my-4 w-100' disabled={isPending}>Log in <IoLogInOutline className='mx-2' size={'30px'} /></button>
                                <hr />
                                <button className='btn btn-dark w-100 p-2 text-capitalize fw-bold' >
                                    <FcGoogle size={'30px'} /> log in with google
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="left-div col-6 vh-100 bg-primary d-flex align-items-center justify-content-center">
                        <img src={logo} alt="" className='w-75 h-75' />
                    </div>
                </section>
            }
        </>
    )
}