import { Link } from 'react-router-dom'
// icons
import { MdOutlinePhoneEnabled, MdOutlineMail, MdOutlineDarkMode } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsPatchPlusFill } from "react-icons/bs";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";

// axios
import axios from "axios"

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

// global var
// import server_host from '../global_var'
function Photos({ photos, setWindow }) {
    return (
        <main className='card bg-light p-3 w-75  z-2 position-absolute d-flex gap-2' style={{ top: "calc(26% / 2)", left: "calc(25% / 2)", height: "80%" }}>
            <h2 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>more picture</h2>
            <MdOutlineFullscreenExit className='position-absolute pointer' size={"25px"} onClick={() => setWindow(null)} />
            <div className='d-flex flex-wrap justify-content-center gap-2 ' style={{ overflowX: 'hidden', overflowY: "scroll" }}>
                {
                    photos.length != 0 ?
                        photos.map(photo => (
                            <img src={"/projects/" + photo} className='' style={{ width: "300px", height: "400px", borderRadius: "10px" }} alt="" />
                        )) : <p className='h3 text-capitalize mt-5' style={{ color: "#333" }}>there are no more pictures</p>
                }
            </div>
        </main>
    )
}

export default function Home() {
    // const [loading, isLoading] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         isLoading(false)
    //     }, 6000);
    // }, [])
    // get contact info data 
    const [contact_info, setContact_info] = useState()
    const [projects, setProjects] = useState()
    useEffect(() => {
        async function getData() {
            const { data } = await axios.get('https://lorenzelektrek-back.onrender.com')
            console.log(data.contact_info)
            setContact_info(data.contact_info)
            setProjects(data.projects)
        }
        getData()
    }, [])

    const [window, setWindow] = useState(null)
    // if (loading) {
    //     return (
    //         <video id='video' autoPlay muted style={{
    //             position: "fixed",
    //             top: "0",
    //             bottom: "0",
    //             width: "100vw",
    //             height: "100vh",
    //             objectFit: "cover"
    //         }}>
    //             <source src="../../public/logo.mp4" />
    //         </video>
    //     )
    // }
    return (
        <>
            <header className="main-header px-3 py-1 d-flex flex-wrap position-fixed w-100 z-3" >
                <div className="center-div" style={{ width: "", height: "63px" }}>
                    <Link to='/' className="logo"><img className='w-100' style={{ height: "63px" }} src="/h logo.png" alt="" /></Link>
                </div>
                <div className="right-div">
                    <ul className=''>
                        {/* <li className="d-flex align-items-center text-light"><a href='#services' className="text-light text-decoration-none">hizmetler</a></li> */}
                        <li className="d-flex align-items-center text-light"><a href='#projects' className="text-light text-decoration-none">projeler</a></li>
                    </ul>
                    <div className="left-div">
                        <a href="#contact-section" className='btn btn-primary text-capitalize'><p className='mx-2 my-0'>bize Ulaşın</p><MdOutlinePhoneEnabled size={"20px"} /></a>
                    </div>
                </div>
            </header>
            <section className='pt-1  main-section'>
                <section className='first-section d-flex py-4 flex-wrap-reverse align-items-center justify-content-between z-3' style={{ minHeight: "calc(100vh - 63px)", marginTop: "64px" }}>
                    <div className='position-absolute w-100 vh-100 bg-dark z-2 opacity-50'>

                    </div>
                    <div className='text-center w-100 z-3'>
                        <h1 className='text-danger' style={{ fontFamily: "ProtestGuerrilla", fontSize: "45px" }}>Lorenz Elektrik olarak</h1>
                        <p className='mw-100 w-50 m-auto text-light text-center' style={{ fontSize: "25px", fontFamily: "BebasNeue" }}>konut ve endüstriyel projelerin ihtiyaçlarını karşılayan yenilikçi ve entegre elektrik çözümleri sunuyoruz. Bu alandaki uzun yıllara dayanan deneyimimiz ve derin bilgi birikimimiz sayesinde, müşteri memnuniyetini garanti eden yüksek kaliteli hizmetler sağlıyoruz.
                            Hizmetlerimiz; elektrik sistemlerinin tasarımı, kurulumu ve bakımı gibi alanları kapsar ve her zaman en yüksek güvenlik ve verimlilik standartlarına uygun çalışırız. Ayrıca, projelerinizin sorunsuz bir şekilde ilerlemesini sağlamak için planlamadan gerekli izinlerin alınmasına kadar tam destek sunuyoruz.
                            Lorenz Elektrik'i tercih etmek; güven, kalite ve yenilik üzerine kurulu bir ortaklık anlamına gelir. Hayallerinizi gerçeğe dönüştürmek için buradayız.</p>
                        {/* <button className='btn btn-primary text-capitalize'>more about us</button> */}
                    </div>
                </section>

                {/* <section className='slide vh-100 w-100'>
                    <img src={slide_images[1]} alt="" className='h-100 w-100' />
                </section>
                <section id='services' className='d-flex flex-wrap align-items-center gap-3 justify-content-center' style={{ marginTop: "-300px" }}>
                    <div className='text-bg-light  ' style={{ width: "350px", height: "600px", border: "2px solid #eee", borderRadius: "7px" }}>
                        <img className=' w-100' src="/electric-residential-fuses-1024x679.jpg" alt="" />
                        <div className='p-4'>
                            <h4 className='my-4'>
                                ELECTRICITY
                            </h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos perferendis velit est? Architecto, consectetur. Libero deserunt temporibus aperiam iure alias hic minus, itaque, non cupiditate laboriosam veniam, rem doloribus blanditiis.
                            </p>
                        </div>
                    </div>
                    <div className='p-3 text-bg-dark ' style={{ width: "300px", border: "2px solid #eee", borderRadius: "7px", height: "600px" }}>
                        <h4 className='my-4'>
                            YEARS OF EXPERIENCE IN THE ELECTRICAL BUSINESS
                        </h4>
                        <p>
                            Meric Electric, Inc. as; We operate in the fields of electrical project design, electrical contracting, consultancy services, measurement, analysis and reporting services.
                        </p>
                    </div>
                </section> */}
                {/* projects section */}
                <section id='projects' className='projects-section py-5 position-relative'>
                    <h2 className='text-capitalize text-center' style={{ fontFamily: "BebasNeue", fontSize: "40px" }}>en önemli projeler</h2>
                    <div className='d-flex align-items-center z-1 p-5 gap-4 justify-content-center flex-wrap'>
                        {
                            projects?.map((project) => (
                                <Link to={"/"} className='card ' style={{ height: "400px", width: "350px" }}>
                                    <img src={"/projects/" + project?.coverImg} alt="" className='w-100 h-100 ' style={{ backgroundPosition: "center" }} />
                                    <div className='about position-absolute text-bg-light d-flex align-items-center justify-content-center w-100 h-100 text-center'>
                                        <div style={{ fontFamily: "BebasNeue", fontSize: "20px" }} className='px-3'>
                                            <p>
                                                {
                                                    project?.about
                                                }
                                            </p>
                                            <div className='d-flex justify-content-center'>
                                                <button className='m-auto gap-2 btn btn-light text-capitalize d-flex align-items-center justify-content-center' onClick={() => { setWindow(project?.images); }}><BsPatchPlusFill size={"25px"} color='#1b49d5' />more</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    {
                        window ? <Photos photos={window} setWindow={setWindow} /> : null
                    }
                    {/* {
                        <div className='d-flex justify-content-center'>
                            <button className='m-auto gap-2 btn btn-light text-capitalize d-flex align-items-center justify-content-center'><BsPatchPlusFill size={"25px"} color='#1b49d5' />more</button>
                        </div>
                    } */}
                </section>
                {/* contact section */}
                <section className='py-4' id='contact-section' style={{ backgroundColor: "#333" }}>
                    <h2 className='text-capitalize text-center mb-4' style={{ fontFamily: "BebasNeue", fontSize: "40px" }}>bize Ulaşın</h2>
                    <div className='d-flex justify-content-center flex-wrap gap-4'>
                        <div className='card py-4 px-2 text-center' style={{ width: "300px" }}>
                            <div>
                                <MdAlternateEmail size={"70px"} color='brown' className='m-auto' />
                                <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>email</h4>
                                <a href={"mailto:" + contact_info?.email} className='w-100 h-50'>{contact_info?.email}</a>
                            </div>
                        </div>
                        <div className='card py-4 px-2 text-center' style={{ width: "300px" }}>
                            <div>
                                <FaInstagram size={"70px"} color='red' className='m-auto' />
                                <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>instagrame</h4>
                                <a href={contact_info?.instgrame} className='w-100'>{contact_info?.instgrame}</a>
                            </div>
                        </div>

                        <div className='card py-4 px-2 text-center' style={{ width: "300px" }}>
                            <div>
                                <FaWhatsapp size={"70px"} color='green' className='m-auto' />
                                <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>what's app</h4>
                                <a href={contact_info?.whatsapp} className='w-100 h-50'>{contact_info?.whatsapp}</a>
                            </div>
                        </div>

                        <div className='card py-4 px-2 text-center' style={{ width: "300px" }}>
                            <div>
                                <MdPhoneCallback size={"70px"} color='' className='m-auto' />
                                <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>phone</h4>
                                <p className='h5 w-100 h-50'>{contact_info?.phone}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



            {/* footer */}
            <footer className='px-5 py-3 text-bg-dark' style={{ borderTop: "1px solid white" }}>
                <main className='d-flex flex-wrap justify-content-around gap-5'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="/LORENZ ELEKTRİK LOGO.png" className='' style={{ width: '200px' }} alt="" />
                    </div>

                    <div className='text-capitalize w-25 text-center'>
                        <hr />
                        <h3 >page sections</h3>
                        <ul className='list-unstyled'>
                            <li className="d-flex align-items-center text-light"><a href='#services' className="text-light text-decoration-none">hizmetler</a></li>
                            <li className="d-flex align-items-center text-light"><a href='#projects' className="text-light text-decoration-none">projeler</a></li>
                            <li className="d-flex align-items-center text-light"><a href='#contact-section' className="text-light text-decoration-none">bize Ulaşın</a></li>
                        </ul>
                        <hr />
                    </div>
                    <div className='card py-4 px-2 mt-3'>
                        <h4 className='text-center text-capitalize'>contact info</h4>
                        <ul className='list-unstyled w-100'>
                            <li className='gap-1 d-flex align-items-center'><MdOutlinePhoneEnabled color='blue' size={"22px"} /> <p className='m-0 text-overflow-hidden'>{contact_info?.phone}</p></li>
                            <li className='gap-1 d-flex align-items-center'><MdOutlineMail color='brown' size={"22px"} /> <p className='m-0'>{contact_info?.email}</p></li>
                            <li className='gap-1 d-flex align-items-center'><FaWhatsapp color='green' size={"22px"} /> <p className='m-0'>{contact_info?.whatsapp}</p></li>
                            <li className='gap-1 d-flex align-items-center'><FaInstagram color='red' size={"22px"} /> <p className='m-0'>{contact_info?.instgrame}</p></li>
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
