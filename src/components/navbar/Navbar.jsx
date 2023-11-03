import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import icon_ins from '../../assets/icons/ins.svg'
import logoImg from '../../assets/logo.svg'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark-50 navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logoImg} alt="" style={{ width: "100px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active mx-3" aria-current="page" to="/">Baş Sahypa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/">Proyektler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to='/'>Hyzmatlar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/">Biz Barada</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to='/'>Habarlaşmak</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to='https://www.instagram.com/kd_design_tm' target="_blank"><img src={icon_ins} alt="" style={{ width: "30px" }} /></Link>
                            <Link to='mailto:kemalhojayew04@gmail.com' className="btn btn-outline-light btn-sm rounded-5 px-3 ms-3">Habarlaşmak <FontAwesomeIcon icon={faArrowRight} className="ms-2 pt-1" /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar