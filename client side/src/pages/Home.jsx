import { Link } from 'react-router-dom'
// icons
import { MdOutlinePhoneEnabled, MdOutlineMail, MdOutlineDarkMode } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsPatchPlusFill } from "react-icons/bs";
import { TbSend2 } from "react-icons/tb";


// react library
import { useEffect, useState } from 'react';

// scss file 
import './Home.scss'

// css fonts 
import '../fonts.css'

// images
import slide_1 from '../../public/slide/ai-generated-8866051_1920.jpg'
import slide_2 from '../../public/slide/electric-4198293_1920.jpg'
import slide_3 from '../../public/slide/electrician-2755682_1920.jpg'
import slide_4 from '../../public/slide/wire-1098059_1920.jpg'
const slide_images = [slide_1, slide_2, slide_3, slide_4]

export default function Home() {
    const [loading, isLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 6000);
    }, [])

    const [counter, setCounter] = useState(0)
    if (counter == 4) {
        setCounter(0)
    }
    setTimeout(() => {
        setCounter(counter => counter + 1)
    }, 10000);

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
                <div className="center-div" style={{
                    width: "13%",
                    height: "63px"
                }}>
                    <Link to='/' className="logo"><img className='w-100' style={{ height: "63px" }} src="../../public/h logo.png" alt="" /></Link>
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
                    <a href="#contact-section" className='btn btn-primary text-capitalize'><p className='mx-2 my-0'>contact us</p><MdOutlinePhoneEnabled size={"20px"} /></a>
                </div>
            </header>
            <section className='pt-3 text-bg-dark main-section'>
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
                <section className='d-flex align-items-center justify-content-between' style={{ height: "calc(100vh - 63px)" }}>
                    <div className='col-5' style={{ marginLeft: "70px" }}>
                        <h1 className='text-danger' style={{ fontFamily : "ProtestGuerrilla" , fontSize : "3vw"}}>WE FOCUS ON BUILDING STRONG RELATIONSHIPS</h1>
                        <p className='' style={{ fontSize: "2vw" , fontFamily : "BebasNeue"}}>For 34 years, we have been building the future with firm steps by prioritizing institutionalism and quality.</p>

                        <button className='btn btn-primary text-capitalize'>more about us</button>
                    </div>
                    <div className='w-100 d-flex align-items-center justify-content-center'>
                        <img src="../../public/3D logo.png" className='w-75' alt="" />
                    </div>
                </section>
                {/* slide */}
                <section className='slide vh-100 w-100'>
                    <img src={slide_images[counter]} alt="" className='h-100 w-100' />
                </section>
                {/* services card */}
                <section className='d-flex align-items-center gap-3 justify-content-center' style={{ marginTop: "-300px" }}>
                    <div className='vh-50 text-bg-light ' style={{ width: "400px", height: "600px", border: "2px solid #eee", borderRadius: "7px" }}>
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
                    <div className='p-3 text-bg-dark ' style={{ width: "300px", border: "2px solid #eee", borderRadius: "7px", height: "600px" }}>
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
                        <button className='btn btn-light'>service</button>
                    </div>
                </section>
                {/* projects section */}
                <section className='projects-section py-5'>
                    <h2 className='text-capitalize text-center'>projects</h2>
                    <div className='d-flex align-items-center p-5 gap-4 justify-content-center flex-wrap'>
                        <div className='card bg-light' style={{ height: "400px", width: "350px" }}>

                        </div>
                        <div className='card bg-light' style={{ height: "400px", width: "350px" }}>

                        </div>
                        <div className='card bg-light' style={{ height: "400px", width: "350px" }}>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='m-auto gap-2 btn btn-light text-capitalize d-flex align-items-center justify-content-center'><BsPatchPlusFill size={"25px"} color='#1b49d5' />more</button>
                    </div>
                </section>
                {/* contact section */}
                <section className='pt-3' id='contact-section'>
                    <h2 className='text-capitalize text-center'>contact us</h2>
                    <div className='d-flex mt-5'>
                        <div style={{ width: "70%" }} className='py-2 px-4 d-flex justify-content-center'>
                            <form action="" className='w-50' >
                                <label htmlFor="" className='mb-2 text-uppercase'>Full name</label>
                                <input type="text" name="" id="" placeholder='name' className='form-control w-100 mb-3' />
                                
                                <label htmlFor="" className='mb-2 text-uppercase'>email</label>
                                <input type="text" name="" id="" placeholder='email' className='form-control w-100 mb-3' />
                                
                                <label htmlFor="" className='mb-2 text-uppercase'>message</label>
                                <textarea name="" id="" placeholder='message' className='form-control w-100 mb-3'></textarea>

                                <button type='submit' className='btn btn-success text-uppercase d-flex align-items-center gap-2'>send <TbSend2 size={"20px"}/></button>
                            </form>
                        </div>
                        <div className='position-relative' style={{ width: "30%", height: "600px" }}>
                            <img src={slide_1} alt="" className='w-100 h-100 position-relative' />
                            <div className='position-absolute p-4 w-75 h-75' style={{
                                background: "#1b4ad554",
                                backdropFilter: "blur(10px)",
                                top: "calc(25% / 2)",
                                left: "calc(25% / 2)"
                            }}>
                                <h4 className='text-center text-capitalize'>contact info</h4>
                                <ul className='list-unstyled'>
                                    <li className='gap-1 d-flex align-items-center'><MdOutlinePhoneEnabled size={"22px"} /> <p className='m-0'>+905462063676</p></li>
                                    <li className='gap-1 d-flex align-items-center'><MdOutlineMail size={"22px"} /> <p className='m-0'>lorenzelektrik@gmail.com</p></li>
                                    <li className='gap-1 d-flex align-items-center'><IoLocation size={"22px"} /> <p className='m-0'>Emin Ali pasha cad. Suadiye / Kadikoy</p></li>
                                </ul>
                                <nav className='d-flex align-items-center justify-content-around px-5'>
                                    <FaFacebook size={"30px"} color='blue' className='pointer-scale' />
                                    <FaInstagram size={"30px"} color='red' className='pointer-scale' />
                                    <FaWhatsapp size={"30px"} color='green' className='pointer-scale' />
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



            {/* footer */}
            <footer className='px-5 py-3 text-bg-dark' style={{ borderTop: "1px solid white" }}>
                <main className='d-flex'>
                    <div>
                        <img src="../../public/LORENZ ELEKTRİK LOGO.png" className='' style={{ width: '20%' }} alt="" />
                    </div>
                    <div className='card col-2 py-4 px-2'>
                        <h4 className='text-center text-capitalize'>contact info</h4>
                        <ul className='list-unstyled'>
                            <li className='gap-1 d-flex align-items-center'><MdOutlinePhoneEnabled size={"22px"} /> <p className='m-0'>+905462063676</p></li>
                            <li className='gap-1 d-flex align-items-center'><MdOutlineMail size={"22px"} /> <p className='m-0'>lorenzelektrik@gmail.com</p></li>
                            <li className='gap-1 d-flex align-items-center'><IoLocation size={"22px"} /> <p className='m-0'>Emin Ali pasha cad. Suadiye / Kadikoy</p></li>
                        </ul>
                        <nav className='d-flex align-items-center justify-content-around px-5'>
                            <FaFacebook size={"30px"} color='blue' className='pointer-scale' />
                            <FaInstagram size={"30px"} color='red' className='pointer-scale' />
                            <FaWhatsapp size={"30px"} color='green' className='pointer-scale' />
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
