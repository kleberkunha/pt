import { Link } from 'react-router-dom';
import '../../global.scss';


function HeaderBar () {
    return (
        <>
           <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link to="#" className="navbar-brand" href="#page-top">Welcome to my Portfolio</Link>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Home</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Studies</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Projects</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">About</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><a to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="https://www.mediafire.com/file/9q17xmf40hmkjba/CV_Kleber_Cunha.pdf/file" target="_blank" rel="noreferrer">CV</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderBar;