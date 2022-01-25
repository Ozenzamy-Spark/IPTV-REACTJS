import './Navbar.css';
import './Responsive.css';


function Navbar() {
    return (
        <nav className='Navbar'>
            <a href='#'>LOGO</a>
            <div className='itemslist'>
                <div className='items'>
                    <a>Accueil</a>
                    <a>Abonnements</a>
                    <a>Chaines</a>
                    <a>Contact</a>
                </div>
                <div className='mobile-menu'>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;