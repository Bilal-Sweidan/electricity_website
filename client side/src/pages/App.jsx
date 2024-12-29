import { Link , Outlet } from 'react-router-dom'
// icons
import { MdOutlinePhoneEnabled } from "react-icons/md";

// scss file 
import './App.scss'

// css fonts 
import '../fonts.css'



export default function App() {
    return (
        <main>
            <header className="main-header px-3 py-2 d-flex flex-wrap position-fixed w-100 z-3" >
                <div className="center-div" style={{ height: "63px" }}>
                    <Link to='/' className="logo"><img className='w-100' style={{ height: "63px" }} src="/h logo.png" alt="" /></Link>
                </div>
                <div className="right-div">
                    <ul className='m-0 p-0 mx-4'>
                        <li className="d-flex my-0  text-light"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                        <li className="d-flex my-0  text-light"><Link to="/projects" className="text-light text-decoration-none">projeler</Link></li>
                    </ul>
                    <div className="left-div">
                        <Link to="/Contact" className='btn text-capitalize text-light' style={{backgroundColor : "#5C3C74" , boxShadow : "0px 0px 20px #5C3C74"}}><p className='mx-2 my-0'>bize Ulaşın</p><MdOutlinePhoneEnabled size={"20px"} /></Link>
                    </div>
                </div>
            </header>
            <section className='pt-1 bg-dark  main-section' style={{ boxShadow : "inset 0px -141px 138px -147px #5C3C74" , minHeight : "100vh"}}>
                <Outlet/>
            </section>
            {/* footer */}
            <footer className='px-5 py-3 text-bg-dark' style={{ borderTop: "1px solid white" }}>
                <main className='d-flex flex-wrap justify-content-around gap-5'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="/h logo.png" className='' style={{ width: '300px' }} alt="" />
                    </div>

                    <div className='text-capitalize text-center pt-3' style={{width : "300px"}}>
                        <h3 >page sections</h3>
                        <ul className='list-unstyled d-flex gap-2 justify-content-center flex-wrap align-items-center'>
                            <li className="d-flex align-items-center text-light"><a href='#services' className="text-light text-decoration-none">hizmetler</a></li>
                            <li className="d-flex align-items-center text-light"><a href='#projects' className="text-light text-decoration-none">projeler</a></li>
                            <li className="d-flex align-items-center text-light"><a href='#contact-section' className="text-light text-decoration-none">bize Ulaşın</a></li>
                        </ul>
                    </div>
                </main>
                <hr />
                <p className='text-center'>
                    © 2024 <span className='text-primary'>LORENZ ELEKTRİK</span>  / All Rights Reserved
                </p>
            </footer>
        </main>
    )
}


// color pattern for logo
// #045CB4
// #E40414
// #5C3C74
// #AC306C
