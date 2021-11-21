import './main.scss';
import '../../global.scss';

import THP from '../ContentPortfolio/img/portfolio/THP.png';
import CursoEmVideo from '../ContentPortfolio/img/portfolio/cursoEmVideo.png';
import B7 from '../ContentPortfolio/img/portfolio/b7.jpg';
import ecole from '../ContentPortfolio/img/portfolio/42.png';

import Sports from '../ContentPortfolio/img/portfolio/Projects/sportswithme.png';
import FollowNut from '../ContentPortfolio/img/portfolio/Projects/follownut.png';
import Agency from '../ContentPortfolio/img/portfolio/Projects/agency.png';
import Gossip from '../ContentPortfolio/img/portfolio/Projects/gossip.png';
import Pizza from '../ContentPortfolio/img/portfolio/Projects/pizza.png';
import Movies from '../ContentPortfolio/img/portfolio/Projects/movies.png';
import Note from '../ContentPortfolio/img/portfolio/Projects/note.png';
import Doc from '../ContentPortfolio/img/portfolio/Projects/doc.png';
import Starbucks from '../ContentPortfolio/img/portfolio/Projects/starbucks.png';




function Main () {
    return(
        <>
            <section className="page-section portfolio" id="portfolio">
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
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ecole} alt="..." />
                            </div>
                        </div>
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
                    </div>
                </div>
            </section>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
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
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Agency} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Gossip} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Pizza} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Movies} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Note} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Doc} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Starbucks} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ms-auto"><p className="lead">Hello, I'm Kleber, a Web Developer.<br/>
                            After years of working in IT support, I turned to web development.<br/>
                            I started my self-taught apprenticeship a year before finally having the chance to enroll in The Hacking Project’s Fullstack Developer training program.<br/>

                            The intensive six-month training course has allowed me to build a solid foundation, learn good practices and acquire the proper methodology
                            to be able to continue to progress.
                            </p></div>
                        <div className="col-lg-4 me-auto"><p className="lead"> 
                        Today, I am looking for a job as a web developer to deepen and expand my knowledge and interest in web development.<br/>
                        

                            Versatility, a taste for teamwork, perseverance, curiosity and the desire to learn are the qualities that I have acquired and that are essential to the profession.</p></div>
                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://www.mediafire.com/file/9q17xmf40hmkjba/CV_Kleber_Cunha_withLinks.pdf/file" target="_blank" rel="noreferrer">
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
                            <a className="btn btn-md btn-outline-success" href="0608505851" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalPhone">
                                <i className="fas fa-download me-2"></i>
                                Phone
                            </a>
                            <a className="btn btn-md btn-outline-success" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer">
                                <i className="fas fa-download me-2"></i>
                                LinkedIn
                            </a>
                            <a className="btn btn-md btn-outline-success" href="hello.kleberkunha@gmail.com" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalEmail">
                                <i className="fas fa-download me-2"></i>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Champs sur marne / France
                                <br />
                                Postal code 77420
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Social media</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-facebook-f">Lin</i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/kleberkunha" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter">Git</i></a>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                I'm available for freelance work as computer repair, IT support, Website Developer.<br/>
                                Fell free to contact me.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Kleber Cunha 2022</small></div>
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
                                        <p className="mb-4">The Hacking Project is an intensive six-month training
                                         course based on peer-to-peer learning. Over 1,200 hours of exercises, 
                                         projects and evaluations per week. Ruby On Rails, Javascript ES6, React Js, Git/GitHub
                                         Cursos em video is a teaching platform with comprehensive video courses on programming.
                                         It also provides certificates for completed courses. HTML, CSS, Javascript, and Object-oriented programming.
</p>
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
                                        <p className="mb-4">The Hacking Project is an intensive six-month training course based on peer-to-peer learning. 
                                        Over 1,200 hours of exercises, projects and evaluations per week. Ruby On Rails, Javascript ES6, React Js, Git/GitHub
                                        B7web is an online course on FullStack programming that provides a certificate after successfully completing the program.
                                        Cursos em video is a teaching platform with comprehensive video courses on programming. It also provides certificates for completed courses.
                                        HTML, CSS, Javascript, and Object-oriented programming.</p>
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
                                        <p className="mb-4">The final project of the formation The hacking project
                                            about nutritionist website with a group of 5 people, 3 in backend and 2 in front.</p>
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
                                        <p className="mb-4">I'm available 24h, if you call and i do not answer please leave a message and i will be in contact few minutes later.</p>
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
                                        <p className="mb-4">I will be answering as fast as i can, in case that you did not have any answer please contact me direct by phone. 06-08-50-58-51.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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