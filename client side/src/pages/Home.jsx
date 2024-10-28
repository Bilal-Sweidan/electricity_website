import { Link } from 'react-router-dom'
// icons
import { MdOutlinePhoneEnabled,MdOutlineMail,MdOutlineDarkMode } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebook ,FaInstagram,FaWhatsapp} from "react-icons/fa";


// react library
import { useEffect, useState } from 'react';

// scss file 
import './Home.scss'

export default function Home() {
    const [loading, isLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 6000);
    }, [])

    if (loading) {
        return (
            <video id='video' autoPlay muted style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                width: "100vw",
                height: "100vh",
                objectFit: "cover"
            }}>
                <source src="../../public/logo.mp4" />
            </video>
        )
    }
    return (
        <>
            <header className="main-header px-3 py-1">
                <div className="center-div">
                    <Link to='/' className="logo text-decoration-none text-light fw-bold">Light Store</Link>
                </div>
                <div className="right-div">
                    <ul className=''>
                        {/* <li className="d-flex align-items-center text-light"><IoMdArrowDropdown /> about</li> */}
                        <li className="d-flex align-items-center text-light"><Link to="/books/categories" className="text-light text-decoration-none">home</Link></li>
                        <li className="d-flex align-items-center text-light"><Link to="/books/categories" className="text-light text-decoration-none">services</Link></li>
                        <li className="d-flex align-items-center text-light"><Link to="/books/categories" className="text-light text-decoration-none">our  projects</Link></li>
                    </ul>
                </div>
                <div className="left-div">
                    <div className="mx-3">
                        <MdOutlineDarkMode size={'25px'} className="text-light pointer" />
                    </div>
                    <Link to="#conect" className='btn btn-primary text-capitalize'><p className='mx-2 my-0'>contact us</p><MdOutlinePhoneEnabled size={"20px"} /></Link>
                </div>
            </header>
            <section className='py-3'>
                {/* <div className='w-100 h-100'>
                    <video id='video' autoPlay muted style={{
                        position: "fixed",
                        top: "62px",
                        bottom: "0",
                        width: "100vw",
                        height: "90vh",
                        objectFit: "cover",
                        zIndex: "-3"
                    }}>
                        <source src="../../public/logo.mp4" />
                    </video>
                </div> */}
                <section className='m-5' style={{ height: "calc(100% - 63px)" }}>
                    <div className='col-5 p-2'>
                        <h3 className='text-danger'>WE FOCUS ON BUILDING STRONG RELATIONSHIPS</h3>
                        <p className='' style={{ fontSize: "20px" }}>For 34 years, we have been building the future with firm steps by prioritizing institutionalism and quality.</p>

                        <nav className='w-50 d-flex align-items-center justify-content-around'>
                            <button className='btn btn-primary'>contact us</button>
                            <button className='btn btn-primary'>services</button>
                        </nav>
                    </div>
                </section>
                <section className='d-flex align-items-center gap-3 justify-content-center'>
                    <div className='vh-50 col-3 text-bg-light ' style={{ height: "600px", border: "2px solid #eee", borderRadius: "7px" }}>
                        <img className=' w-100' src="https://www.mericelektrik.com.tr/wp-content/uploads/2021/02/electric-residential-fuses-1024x679.jpg" alt="" />
                        <div className='p-4'>
                            <h4 className='my-4'>
                                ELECTRICITY
                            </h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos perferendis velit est? Architecto, consectetur. Libero deserunt temporibus aperiam iure alias hic minus, itaque, non cupiditate laboriosam veniam, rem doloribus blanditiis.
                            </p>
                            <button className='btn btn-primary'>service</button>
                        </div>
                    </div>
                    <div className='p-3 col-3 text-bg-light ' style={{ border: "2px solid #eee", borderRadius: "7px", height: "600px" }}>
                        <h4 className='my-4'>
                            YEARS OF EXPERIENCE IN THE ELECTRICAL BUSINESS
                        </h4>
                        <p>
                            Meric Electric, Inc. as; We operate in the fields of electrical project design, electrical contracting, consultancy services, measurement, analysis and reporting services.
                        </p>
                        <nav className='d-flex align-items-center justify-content-center gap-5 my-5'>
                            <div className='text-center'>
                                <p className='p-0 m-0'>110 +</p>
                                <p>team memebers</p>
                            </div>
                            <div className='text-center'>
                                <p className='p-0 m-0'>90 +</p>
                                <p>projects</p>
                            </div>
                        </nav>
                        <button className='btn btn-dark'>service</button>
                    </div>
                </section>
            </section>
            <footer className='px-5 py-3 text-bg-dark' style={{}}>
                <main className='d-flex'>
                    <div>
                        <img src="../../public/LORENZ ELEKTRİK LOGO.png" className='' style={{ width: '20%' }} alt="" />
                    </div>
                    <div className='card col-2 py-4 px-2'>
                        <h4 className='text-center text-capitalize'>contact info</h4>
                        <ul className='list-unstyled'>
                            <li className='gap-1 d-flex align-items-center'><MdOutlinePhoneEnabled size={"22px"} /> <p className='m-0'>+905462063676</p></li>
                            <li className='gap-1 d-flex align-items-center'><MdOutlineMail size={"22px"}/> <p className='m-0'>lorenzelektrik@gmail.com</p></li>
                            <li className='gap-1 d-flex align-items-center'><IoLocation size={"22px"} /> <p className='m-0'>Emin Ali pasha cad. Suadiye / Kadikoy</p></li>
                        </ul>
                        <nav className='d-flex align-items-center justify-content-around px-5'>
                            <FaFacebook size={"30px"} color='blue' className='pointer-scale'/>
                            <FaInstagram size={"30px"} color='red' className='pointer-scale'/>
                            <FaWhatsapp size={"30px"} color='green' className='pointer-scale'/>
                        </nav>
                    </div>
                </main>
                <hr />
                <p className='text-center'>
                    © 2024 <span className='text-primary'>LORENZ ELEKTRİK</span>  / All Rights Reserved
                </p>
            </footer>
        </>
    )
}
