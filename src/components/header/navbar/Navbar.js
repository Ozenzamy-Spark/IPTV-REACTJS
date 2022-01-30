import './Navbar.css';
import './Responsive.css';


function Navbar() {
    return (
        <nav className='Navbar'>
            <a href='#test'>4k<sub><small>planete</small></sub></a>
            <div className='itemslist'>
                <div className='items'>
                    <a href="#test">Accueil</a>
                    <a href="#test">Abonnements</a>
                    <a href="#test">Chaines</a>
                    <a href="#test">Contact</a>
                </div>
                <div className='mobile-menu'>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;