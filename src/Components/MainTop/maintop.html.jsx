import '../../global.scss';
import './maintop.scss';
import available from './available.png';
import Profile from './eu.jpg';

function MainTop () {
    return (
        <>
            <header className="masthead bg-dark text-white text-center" id="top-section">
                <div className="container d-flex align-items-center flex-column">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalProfile">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid profile" src={Profile} alt="..." />
                        </div>
                    </div>
                    <h1 className="masthead-heading text-uppercase mb-0">Kleber Cunha</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <h4>Alternance</h4>

                        <div>
                            <h5 className="">Concepteur développeur d’applications </h5>
                            <p>Préparation&nbsp;:&nbsp;Niveau Bac+4.</p>
                            <p>Type de contrat&nbsp;:&nbsp; Apprentissage (18mois).</p>
                            <p>Rythme&nbsp;:&nbsp;1 mois en entreprise / 2 semaines en formation</p>
                            <p>Technologies&nbsp;:&nbsp;Java,&nbsp;JavaSE,&nbsp;JEE,&nbsp;JS,&nbsp;PHP,&nbsp;Symfony,&nbsp;CMS,&nbsp;SQL.</p>
                        </div>

                    <a href="https://www.mediafire.com/file/7vtyzpcxmguzd5z/CV_Kleber_da_Cunha_2023.pdf/file" target="_blank" rel="noreferrer">
                        <img className="available" src={available} alt="Available" />
                    </a>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModalProfile" tabindex="-1" aria-labelledby="portfolioModalProfile" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content bg-dark">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div className="bg-dark text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="text-primary text-uppercase mb-0">Profile Picture</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <img className="img-fluid rounded mb-5" src={Profile} alt="..." />
                                            <p className="mb-4"></p>
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
            </header>
        </>
    )
}

export default MainTop;


