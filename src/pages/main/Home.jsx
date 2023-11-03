import { Link } from "react-router-dom"
import service1 from "../../assets/service/1.svg";
import service2 from "../../assets/service/2.svg";
import service3 from "../../assets/service/3.svg";

import proj1 from "../../assets/projects/1.png";
import proj2 from "../../assets/projects/2.png";
import proj3 from "../../assets/projects/3.png";
import proj4 from "../../assets/projects/4.png";
import proj5 from "../../assets/projects/5.png";
import proj6 from "../../assets/projects/6.png";
import proj7 from "../../assets/projects/7.png";
import proj8 from "../../assets/projects/8.png";
import proj9 from "../../assets/projects/9.png";

import reactImg from "../../assets/cards/react.png";
import figmaImg from "../../assets/cards/figma.png";
import pcImg from "../../assets/cards/pc.jpg";
import designImg from "../../assets/cards/design.png";

import insblack from "../../assets/icons/ins-black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-xl-8 text-center">
                        <div className="display-4 ls-1">
                            Bize ynam edin, geljegi bilelikde guralyň.
                        </div>
                        <div className="mt-4 ls-1 lh-lg">
                            KD Design, programmalaşdyrma we dizayn ugurunda hünärleşdirilen bir kompaniýadyr. Kompaniýamız, müşderileriniň isleglerini kanagatlandyrmak üçin ýokary hilli we täzeçil çözgütleri hödürleýär.
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <Link to="/" className="btn btn-light mx-2">Habarlaşmak</Link>
                            <Link to="/" className="btn btn-outline-light mx-2">Proýektlerimiz</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="w-50 display-5 mb-5" data-aos="fade-right">
                    Hyzmat berýän hünärlerimiz
                </div>
                <div className="row">
                    <div className="col-xl-4 mb-4" data-aos="fade-up">
                        <div className="card border border-dark rounded-4 bg-dark-50 text-secondary" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="h4 mt-4 mb-3">Web sahypalary</div>
                                <p>Ulanylýan dillerimiz: HTML, CSS, JS, BOOTSTRAP, REACT JS, NODE JS</p>
                            </div>
                            <div className="text-center pb-5">
                                <img src={service1} alt="" style={{ width: '250px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4" data-aos="fade-up">
                        <div className="card border border-dark rounded-4 bg-dark-50 text-secondary" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="h4 mt-4 mb-3">Dizaýn, logo we ş.m.</div>
                                <p>Ulanylýan programmalarymyz: Figma, Corel Draw, Adobe Illustrator, Adobe Photoshop</p>
                            </div>
                            <div className="text-center pb-5">
                                <img src={service2} alt="" style={{ width: '250px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4" data-aos="fade-up">
                        <div className="card border border-dark rounded-4 bg-dark-50 text-secondary" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="h4 mt-4 mb-3">Reklamalar we wideolar</div>
                                <p>Ulanylýan programmalarymyz: Adobe After Effects, Adobe Premier Pro,</p>
                            </div>
                            <div className="text-center pb-5">
                                <img src={service3} alt="" style={{ width: '250px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="display-5 text-center mb-5" data-aos="fade-down">Soňky eden işlerimiz</div>
                <div className="row">
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj1} alt="" className="img-fluid rounded-4" />
                                </div>
                                <Link to="https://kemal04.github.io/Asman/" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">"Asman" reklamny web sahypa</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj2} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="https://it.net.tm/hotels/" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">Hoteller web sahypa</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj3} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="https://kemal04.github.io/Senagat/" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">Senagat e-commerce web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj4} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">Ýakynyňda web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj5} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="https://arzan.info/" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">ArzanTM web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj6} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">Blog'lar web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj7} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">"Nike banner" web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj8} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <Link to="" target="_blank" className="text-decoration-none text-white d-inline-block h4 text-white mt-5 mb-3">"Lamp banner" web sahypasy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 my-5 py-5" data-aos="fade-down">
                        <div className="card rounded-4 border border-dark bg-dark-50" style={{ width: "370px" }}>
                            <div className="card-body">
                                <div className="scale">
                                    <img src={proj9} alt="" className="img-fluid rounded-4" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                                </div>
                                <div className="h4 text-white mt-5 mb-3">Figmada edilen islerimiz</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container border border-secondary rounded-3 my-5">
                <div className="row align-items-center">
                    <div className="col-xl-6 p-5">
                        <div className="mb-4 fs-18">Ulanyjy tejribe dizaýny sungatyna bagyşlanan karýera bilen, kämillik derejesine ýetdik. Syýahatymyz içgin React interfeýslerini ýasadyk.</div>
                        <Link to='/' className="btn btn-outline-light">Giňişleyin</Link>
                    </div>
                    <div className="col-xl-6 border-start border-secondary">
                        <div className="row">
                            <div className="col-xl-6 col-6 text-center border-end border-bottom border-secondary py-5">
                                <div className="mb-2 h5" data-aos="fade-down">Websites</div>
                                <div className="fs-18" data-aos="fade-down">6</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center border-bottom border-secondary py-5">
                                <div className="mb-2 h5" data-aos="fade-down">Logos</div>
                                <div className="fs-18" data-aos="fade-down">3</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center border-end border-secondary py-5">
                                <div className="mb-2 h5" data-aos="fade-down">Banners</div>
                                <div className="fs-18" data-aos="fade-down">0</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center py-5">
                                <div className="mb-2 h5" data-aos="fade-down">Videos</div>
                                <div className="fs-18" data-aos="fade-down">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="d-flex justify-content-center mb-5">
                    <div className="text-center display-5 w-50" data-aos="fade-down">
                        Dizaýn we tehnologiýa biziň halaýan zatlarymyz
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 mb-4" data-aos="fade-down">
                        <div className="card border-secondary rounded-3 bg-dark-50">
                            <div className="card-body">
                                <img src={reactImg} alt="" className="img-fluid" style={{ height: "160px" }} />
                            </div>
                        </div>
                        <div className="my-3"> Isledik web sahypany yokary derejede we çalt yerine yetirilýär. </div>
                        <Link to="" className="btn btn-outline-light px-4 py-1 rounded-5"><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                    <div className="col-xl-3 mb-4" data-aos="fade-down">
                        <div className="card border-secondary rounded-3 bg-dark-50">
                            <div className="card-body">
                                <img src={figmaImg} alt="" className="img-fluid" style={{ height: "160px" }} />
                            </div>
                        </div>
                        <div className="my-3"> Figma arkaly web sahypalary üçin şablonlar taýýarlanýar. </div>
                        <Link to="" className="btn btn-outline-light px-4 py-1 rounded-5"><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                    <div className="col-xl-3 mb-4" data-aos="fade-down">
                        <div className="card border-secondary rounded-3 bg-dark-50">
                            <div className="card-body">
                                <img src={designImg} alt="" className="img-fluid" style={{ height: "160px" }} />
                            </div>
                        </div>
                        <div className="my-3"> Dizaýn boýunça islendik Logo'lar, afişalar we başgada birnäçe işler. </div>
                        <Link to="" className="btn btn-outline-light px-4 py-1 rounded-5"><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                    <div className="col-xl-3 mb-4" data-aos="fade-down">
                        <div className="card border-secondary rounded-3 bg-dark-50">
                            <div className="card-body">
                                <img src={pcImg} alt="" className="img-fluid" style={{ height: "160px" }} />
                            </div>
                        </div>
                        <div className="my-3"> Biziň işleýiş tertibimiz diňe yokary derejeli we gowy işler çykarmakdyr! </div>
                        <Link to="" className="btn btn-outline-light px-4 py-1 rounded-5"><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>

            <div className="container p-5 my-5 border rounded-3 border-secondary contact-bg">
                <div className="row justify-content-center">
                    <div className="col-xl-12 d-flex justify-content-center">
                        <div className="display-4 text-center w-50" data-aos="fade-down">Indiki dizaýn maksadyňyz bu ýerde</div>
                    </div>
                    <div className="col-xl-12 d-flex justify-content-center">
                        <p className="text-center small mt-4" style={{ width: "40%" }} data-aos="fade-down">
                            Hyýalyň takyklyga laýyk gelýän we dizaýn arzuwlarynyň aýdyň hakykata öwrülen syýahatyna başlamaga taýyn boluň.
                        </p>
                    </div>
                    <div className="col-xl-auto mt-3" data-aos="fade-down">
                        <Link to='https://www.instagram.com/kd_design_tm' target="_blank" className="d-flex align-items-center border rounded-5 p-3 text-decoration-none text-white">
                            <img className="me-2" src={insblack} alt="" style={{ width: "30px" }} />
                            <div>Instagram</div>
                        </Link>
                    </div>
                    <div className="col-xl-auto mt-3" data-aos="fade-down">
                        <Link to='mailto:kemalhojayew04@gmail.com' className="d-flex align-items-center border rounded-5 p-3 text-decoration-none text-white">
                            <FontAwesomeIcon icon={faEnvelope} className="border rounded-circle p-1 me-2" />
                            <div>E-mail address</div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home