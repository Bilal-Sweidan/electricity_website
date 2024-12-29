import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// icons
import { BsPatchPlusFill } from "react-icons/bs";
import { MdOutlineFullscreenExit } from "react-icons/md";
// axios
import axios from "axios";
import Loading from "./Loading";
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

export default function Projects() {
    const [window, setWindow] = useState(null)

    const [projects, setProjects] = useState()
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            setLoading(true)
            const { data } = await axios.get('https://lorenzelektrek-back.onrender.com')
            setProjects(data.projects)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <>
            <section id='projects' className='projects-section mt-5 py-5 position-relative' style={{minHeight : "85vh"}}>
                <h2 className='text-capitalize text-light text-center' style={{ fontFamily: "BebasNeue", fontSize: "40px" }}>en önemli projeler</h2>
                {
                    isLoading ? <Loading />  :
                        <>
                            <div className='d-flex align-items-center z-1 p-5 gap-4 justify-content-center flex-wrap'>
                                {
                                    projects?.map((project) => (
                                        <Link className='card p-0' style={{ height: "400px", width: "350px" , borderRadius : '0'}}>
                                            <img src={"/projects/" + project?.coverImg} alt="" className='w-100 h-100 ' style={{ backgroundPosition: "center"}} />
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
                        </>
                }
            </section>
        </>
    )
}