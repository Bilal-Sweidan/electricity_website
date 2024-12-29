import { useState, useEffect } from "react";
// icons
import { MdAlternateEmail ,MdOutlineAttachEmail } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
// axios
import axios from "axios";
import Loading from "./Loading";
export default function Contact() {
    const [contact_info, setContact_info] = useState()
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            setLoading(true)
            const { data } = await axios.get('https://lorenzelektrek-back.onrender.com')
            setContact_info(data.contact_info)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <>
            {
                isLoading ? <Loading /> :
                    <section className='' id='contact-section' style={{ backgroundColor: "", height: "calc(100vh - 79px)" }}>
                        <h2 className='text-capitalize text-dark text-center mb-4' style={{ fontFamily: "BebasNeue", fontSize: "40px" }}>bize Ulaşın</h2>
                        <div className='contact-div align-items-center d-flex flex-wrap w-100' style={{ backgroundImage: "url(../../public/24340.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "calc(100vh - 75px)" }}>
                            <div className="text-light px-4 py-5 mx-5" style={{ width: "500px", height: "500px", backgroundColor: "#333333e2", borderRadius: "15px" }}>
                                <div className="mb-4">
                                    <div className="d-flex gap-3">
                                        <MdOutlineAttachEmail size={"30px"} color='' className='' />
                                        <h4 className=' text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>email</h4>
                                    </div>
                                    <a href={"mailto:" + contact_info?.email} className='w-100 h-50 px-5' style={{fontSize :  "20px"}}>{contact_info?.email}</a>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex gap-3">
                                        <FaInstagram size={"30px"} color='' className='' />
                                        <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>instagrame</h4>
                                    </div>
                                    <a href={contact_info?.instgrame} className='w-100 h-50 px-5' style={{fontSize :  "20px"}}>{contact_info?.instgrame}</a>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex gap-3">
                                        <FaWhatsapp size={"30px"} color='' className='' />
                                        <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>what's app</h4>
                                    </div>
                                    <a href={contact_info?.whatsapp} className='w-100 h-50 px-5' style={{fontSize :  "20px"}}>{contact_info?.whatsapp}</a>
                                </div>
                                <div className="mb-4 ">
                                    <div className="d-flex gap-3">
                                        <MdPhoneCallback size={"30px"} color='' className='' />
                                        <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>phone</h4>
                                    </div>
                                    <a className='w-100 h-50 px-5 pointer' style={{fontSize :  "20px"}}>{contact_info?.phone}</a>
                                </div>



                                {/* <div>

                                    <a href={contact_info?.instgrame} className='w-100'>{contact_info?.instgrame}</a>
                                </div>
                                <div>
                                    <FaWhatsapp size={"70px"} color='green' className='m-auto' />
                                    <h4 className='text-center text-capitalize' style={{ fontFamily: "ProtestGuerrilla" }}>what's app</h4>
                                    <a href={contact_info?.whatsapp} className='w-100 h-50'>{contact_info?.whatsapp}</a>
                                </div>
                                <div>

                                    <p className='h5 w-100 h-50'>{contact_info?.phone}</p>
                                </div> */}
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}