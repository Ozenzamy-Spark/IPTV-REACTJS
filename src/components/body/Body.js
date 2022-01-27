import './Body.css';
import Features from './features/Features';
import Plans from './plans/Plans';
import WhatsappBtn from './whatsappbtn/WhatsappBtn';


function Body() {
    return (
        <div className='Body'>
            <Features />
            <Plans />
            <WhatsappBtn />
        </div>
    );
}


export default Body;