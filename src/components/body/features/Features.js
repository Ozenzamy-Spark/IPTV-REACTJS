import './Features.css';
import './Responsive.css';


function Features() {
    return(
        <section className='Features'>
            <div className='one'>
                <div className='livetv'>
                    <img src={process.env.PUBLIC_URL+"/assets/img/livetv.jpg"} alt='Live TV'/>
                    <h2>Live TV</h2>
                    <p>Des milliers de chaînes de télévision en direct dans le monde entier Premium HD et FHD Sports.</p>
                    <a href="#" className='readmorebtn'>Lire la suite...</a>
                </div>
                <div className='movies'>
                    <img src={process.env.PUBLIC_URL+"/assets/img/movies.jpg"} alt='Live TV'/>
                    <h2>Movies</h2>
                    <p>Films fréquemment mis à jour, films de haute qualité, différentes catégories !</p>
                    <a href="#" className='readmorebtn'>Lire la suite...</a>
                </div>
                <div className='tvshows'>
                    <img src={process.env.PUBLIC_URL+"/assets/img/tvshows.jpg"} alt='Live TV'/>
                    <h2>TV Shows</h2>
                    <p>Meilleures émissions de télévision de tous les temps Mises à jour fréquemment Séries télévisées Netflix-Hbo-Amazon !</p>
                    <a href="#" className='readmorebtn'>Lire la suite...</a>
                </div>
            </div>
            <div className='two'>
                <h1><i className="fas fa-exclamation-circle exclamation"></i> &nbsp; Pour plus d'informations veuillez nous contacter sur <span>+212.00.00.00.00</span></h1>
            </div>
        </section>
    );
}




export default Features;