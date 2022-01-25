import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';

function Carousel() {
    return (
        <OwlCarousel className='owl-theme' loop margin={10} nav center={true} animateOut={true}>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-1.jpeg'} alt='IPTV'/>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-2.jpeg'} alt="IPTV" width={448}/>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-3.jpeg'} alt="IPTV"/>
            </div>
        </OwlCarousel>
    );
}


export default Carousel;