import './main.scss';
import '../../global.scss';

import THP from '../ContentPortfolio/img/portfolio/THP.png';
import CursoEmVideo from '../ContentPortfolio/img/portfolio/cursoEmVideo.png';
import B7 from '../ContentPortfolio/img/portfolio/b7.jpg';
import ecole from '../ContentPortfolio/img/portfolio/42.png';
import academy from '../ContentPortfolio/img/portfolio/academy.png';
import gorails from '../ContentPortfolio/img/portfolio/gorails.jpg';

import Sports from '../ContentPortfolio/img/portfolio/Projects/sportswithme.png';
import FollowNut from '../ContentPortfolio/img/portfolio/Projects/follownut.png';
import Agency from '../ContentPortfolio/img/portfolio/Projects/agency.png';
import Gossip from '../ContentPortfolio/img/portfolio/Projects/gossip.png';
import Pizza from '../ContentPortfolio/img/portfolio/Projects/pizza.png';
import Movies from '../ContentPortfolio/img/portfolio/Projects/movies.png';
import Note from '../ContentPortfolio/img/portfolio/Projects/note.png';
import Doc from '../ContentPortfolio/img/portfolio/Projects/doc.png';
import Starbucks from '../ContentPortfolio/img/portfolio/Projects/starbucks.png';
import doghero from '../ContentPortfolio/img/portfolio/Projects/doghero.png';




function Main () {
    return(
        <>
            <section className="page-section portfolio" id="studies">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Studies</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={THP} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalAcademy">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={academy} alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={CursoEmVideo} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={B7} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalGorails">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={gorails} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalEcole">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ecole} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section portfolio" id="projects">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#dogheroModal">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={doghero} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalSports">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Sports} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalFollownuts">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={FollowNut} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalAgency">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Agency} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalGossip">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Gossip} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalPizza">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Pizza} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalMovies">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Movies} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalNotes">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Note} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalDoc">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Doc} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalStarbucks">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Starbucks} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-dark text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ms-auto"><h3 className="lead text-center">Hello, my name is Kleber, and I'm a Web Developer.<br/>
                            After years of working in IT support, I turned to web development.<br/>
                            I started my self-taught apprenticeship a year before finally having the chance to enroll in The Hacking Project’s Fullstack Developer training program.<br/>

                            The intensive six-month training course has allowed me to build a solid foundation, learn good practices and acquire the proper methodology
                            to be able to continue to progress.
                            </h3>
                            <h3 className="lead text-center">
                                Today, I am looking for a job as a web developer to deepen and expand my knowledge and interest in web development.<br/>
                                Versatility, a taste for teamwork, perseverance, curiosity and the desire to learn are the qualities that I have acquired and that are essential to the profession.
                            </h3>
                        </div>

                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://www.mediafire.com/file/7vtyzpcxmguzd5z/CV_Kleber_da_Cunha_2023.pdf/file" target="_blank" rel="noreferrer">
                            <i className="fas fa-download me-2"></i>
                            Download my CV!
                        </a>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-xl-5 list-contact">
                            <a className="btn btn-sm btn-outline-success" href="0608505851" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalPhone">
                                <i className="fas fa-download me-1"></i>
                                Phone
                            </a>
                            <a className="btn btn-sm btn-outline-success" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer">
                                <i className="fas fa-download me-1"></i>
                                LinkedIn
                            </a>
                            <a className="btn btn-sm btn-outline-success" href="hello.kleberkunha@gmail.com" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalEmail">
                                <i className="fas fa-download me-1"></i>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-center ">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Strasbourg / France
                                <br />
                                Available to change location!
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Social media</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-facebook-f">Lin</i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/kleberkunha" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter">Git</i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Kleber da Cunha 2023</small></div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">The Hacking Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={THP} alt="..." />
                                        <p className="mb-4">The Hacking Project is an intensive six-month training course based
                                         on peer-to-peer learning. Over 1,200 hours of exercises, projects and evaluations per week.
                                         Ruby On Rails, Javascript ES6, React Js, Git/GitHub.</p>
                                        <button className="btn btn-secondary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://www.thehackingproject.org/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">THP website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalAcademy" tabindex="-1" aria-labelledby="portfolioModalAcademy" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">3w Academy</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={academy} alt="..." />
                                        <p className="mb-4">3w Academy is a school that focus in the practice learning, training course based
                                         on projects everyweek followed by a teacher. Over 800 hours of exercises, projects and evaluations per week.
                                         PHP,Node Js,React Js,SQL,symfony.</p>
                                        <button className="btn btn-secondary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://3wa.fr/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">3w Academy website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Curso em Video</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={CursoEmVideo} alt="..." />
                                        <p className="mb-4">
                                         Cursos em video is a teaching platform with comprehensive video courses on programming.
                                         It also provides certificates for completed courses. HTML, CSS, Javascript, and Object-oriented programming.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://www.cursoemvideo.com/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Curso em video website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">B7WEB</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={B7} alt="..." />
                                        <p className="mb-4">
                                        B7web is an online course on FullStack programming that provides a certificate after successfully completing the program.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://b7web.com.br/fullstack/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">B7web website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalGorails" tabindex="-1" aria-labelledby="portfolioModalGorails" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">GoRails</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={gorails} alt="..." />
                                        <p className="mb-4">
                                        GoRails is an online course on FullStack programming for Ruby on Rails, the best place to learn the language.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://gorails.com/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">GoRails website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalEcole" tabindex="-1" aria-labelledby="portfolioModalEcole" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">42 School</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={ecole} alt="..." />
                                        <p className="mb-4">
                                        School 42 is based on peer-to-peer learning. I was preselected
                                        for one intensive month of projects and exams: Shell, C programming language, and algorithms.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://42.fr/en/homepage/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">42 website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="dogheroModal" tabindex="-1" aria-labelledby="dogheroModal" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">DogHero</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={doghero} alt="..." />
                                        <p className="mb-4">This site was made for dog owners who are looking for company when they go out for an activity, also stores can sell products and create events.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/DogHero-Terre-des-chiens" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">DogHero Project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalSports" tabindex="-1" aria-labelledby="portfolioModalSports" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Sports With Me</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Sports} alt="..." />
                                        <p className="mb-4">This sport meeting application was a three-person team project,
                                         completed in two weeks. The goal: Find people to practice diversified sports activities,
                                         and create or take part in offered sporting events.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/cmarion-mq/Sports_with_ME_Final_Project" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Sports With Me Project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalFollownuts" tabindex="-1" aria-labelledby="portfolioModalFollownuts" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">FollowNut's</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={FollowNut} alt="..." />
                                        <p className="mb-4">This is the final project of the formation (The hacking Project),<br/> made with a group of 5 persons in total.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/follownut_front" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Follow Nut's project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalAgency" tabindex="-1" aria-labelledby="portfolioModalAgency" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Property Search</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Agency} alt="..." />
                                        <p className="mb-4">An application that search for properties, made with Rails + React,<br/>
                                         5 persons in total worked in this project.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/thp-immo_front" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Agency project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalGossip" tabindex="-1" aria-labelledby="portfolioModalGossip" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Gossip Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Gossip} alt="..." />
                                        <p className="mb-4">A social network project made in Ruby On rails,
                                         carried out with The Hacking Project training course.
                                         You can register, log in, create a post, edit and delete.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Gossip_Project_Pimp" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Gossip project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalPizza" tabindex="-1" aria-labelledby="portfolioModalPizza" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Pizza Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Pizza} alt="..." />
                                        <p className="mb-4">Made in javascript, this online pizza ordering application
                                         allows you to take order of pizza and add it to a basket.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Pizza_Site_JS" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Pizza project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalMovies" tabindex="-1" aria-labelledby="portfolioModalMovies" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Movies Search</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Movies} alt="..." />
                                        <p className="mb-4">This online movie search, in javascript, used an API from IMDB.<br/>
                                         It allows you to search for details about any movie or series.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Movie_List-info_Project" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Movie Search project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalNotes" tabindex="-1" aria-labelledby="portfolioModalNotes" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Note Block Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Note} alt="..." />
                                        <p className="mb-4">With the Note Block project in ReactJS using StorageData,<br/>
                                            you can create a note, edit,delete and it has an automatic save feature.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Note-Block" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Note project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalDoc" tabindex="-1" aria-labelledby="portfolioModalDoc" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Doc Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Doc} alt="..." />
                                        <p className="mb-4">A template responsive from a doctor website.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Project_Doc_template" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Doc project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalStarbucks" tabindex="-1" aria-labelledby="portfolioModalStarbucks" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Starbucks Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Starbucks} alt="..." />
                                        <p className="mb-4">Template from the StartBucks website in HTML + CSS with responsive.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Starbucks_copy" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Starbucks project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalPhone" tabindex="-1" aria-labelledby="portfolioModalPhone" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Phone Contact</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <h2>06 08 50 58 51</h2>
                                        <p className="mb-4">I'm available 24h, if you call, and I do not answer, please leave a message and I will be in contact a few minutes later.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalEmail" tabindex="-1" aria-labelledby="portfolioModalEmail" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Email Contact</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <h2>hello.kleberkunha@gmail.com</h2>
                                        <p className="mb-4">I will be answering as fast as I can, in case that you did not have any answer please contact me direct by phone. 06-08-50-58-51.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
