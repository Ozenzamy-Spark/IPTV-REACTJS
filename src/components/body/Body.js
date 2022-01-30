import './Body.css';
import Channels from './channels/Channels';
import Features from './features/Features';
import Plans from './plans/Plans';
import WhatsappBtn from './whatsappbtn/WhatsappBtn';


function Body() {
    return (
        <div className='Body'>
            <Features />
            <Plans />
            <Channels />
            <WhatsappBtn />
        </div>
    );
}


export default Body;