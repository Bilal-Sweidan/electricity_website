import React from 'react'

export default function Home() {
    return (
        <>
            <section className='first-section d-flex py-4 flex-wrap-reverse align-items-center justify-content-center z-2' style={{ minHeight: "calc(100vh - 63px)", marginTop: "64px" }}>
                <div className='position-absolute w-100 h-100 z-2 opacity-50' style={{}}>

                </div>
                <div className='text-center z-2 bg-dark'>
                    <h1 className='text-danger' style={{ fontFamily: "ProtestGuerrilla", fontSize: "45px" }}>Lorenz Elektrik olarak</h1>
                    <p className=' m-auto text-light text-center' style={{ fontSize: "25px", fontFamily: "BebasNeue" }}>konut ve endüstriyel projelerin ihtiyaçlarını karşılayan yenilikçi ve entegre elektrik çözümleri sunuyoruz. Bu alandaki uzun yıllara dayanan deneyimimiz ve derin bilgi birikimimiz sayesinde, müşteri memnuniyetini garanti eden yüksek kaliteli hizmetler sağlıyoruz.
                        Hizmetlerimiz; elektrik sistemlerinin tasarımı, kurulumu ve bakımı gibi alanları kapsar ve her zaman en yüksek güvenlik ve verimlilik standartlarına uygun çalışırız. Ayrıca, projelerinizin sorunsuz bir şekilde ilerlemesini sağlamak için planlamadan gerekli izinlerin alınmasına kadar tam destek sunuyoruz.
                        Lorenz Elektrik'i tercih etmek; güven, kalite ve yenilik üzerine kurulu bir ortaklık anlamına gelir. Hayallerinizi gerçeğe dönüştürmek için buradayız.</p>
                    {/* <button className='btn btn-primary text-capitalize'>more about us</button> */}
                </div>
            </section>
            <section className='px-3 py-5'>
                <h1 className='text-center text-light text-capitalize p-4'>services</h1>
                <div className='w-100 gap-3 px-5 flex-wrap d-flex align-items-center justify-content-center'>
                    <div className='card border-0' style={{ width: "400px", height: "400px", backgroundColor: "#5C3C74" }}>
                        <div className='d-flex justify-content-end position-absolute' style={{ fontFamily: "arial", fontSize: "27px", color: "white", right: "15px", fontWeight: "bolder", backgroundColor: "#AC306C", width: "50px", height: "50px", borderRadius: "0px 20px 0px 200px" }}>
                            <p className='' style={{ paddingRight: "12px" }}>
                                1
                            </p>
                        </div>
                        <img src="/64b1118fd8e92c5a05bfcc41_The-Ultimate-Guide-to-Pricing-Security-Camera-Repair-Services-Feature.webp" alt="" style={{ borderRadius: "7px" , height : "225px" }} />
                        <div className='px-2 py-3 text-light'>
                            <h4 className='text-center text-capitalize'>menotoring camera</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil neque quam alias, non eveniet. Doloremque laboriosam fugit quod eum</p>
                        </div>
                    </div>
                    <div className='card border-0' style={{ width: "400px", height: "400px", backgroundColor: "#5C3C74" }}>
                        <div className='d-flex justify-content-end position-absolute' style={{ fontFamily: "arial", fontSize: "27px", color: "white", right: "15px", fontWeight: "bolder", backgroundColor: "#AC306C", width: "50px", height: "50px", borderRadius: "0px 20px 0px 200px" }}>
                            <p className='' style={{ paddingRight: "12px" }}>
                                2
                            </p>
                        </div>
                        <img src="../../public/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg" alt="" style={{ borderRadius: "7px" , height : "225px" }} />
                        <div className='px-2 py-3 text-light'>
                            <h4 className='text-center text-capitalize'>Industrial electricity</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil neque quam alias, non eveniet. Doloremque laboriosam fugit quod eum</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
