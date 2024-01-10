import '../../global.scss';
import { HashLink as Link } from 'react-router-hash-link';


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
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#top-section" className="nav-link py-3 px-0 px-lg-3 rounded" href="#masthead-heading">Home</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#studies" className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Studies</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#experiences" className="nav-link py-3 px-0 px-lg-3 rounded" href="#experiences">Experiences</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#projects" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Projects</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#about" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">About</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><a to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="https://www.mediafire.com/file/7vtyzpcxmguzd5z/CV_Kleber_da_Cunha_2023.pdf/file" target="_blank" rel="noreferrer">CV</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link smooth to="#contact" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderBar;
