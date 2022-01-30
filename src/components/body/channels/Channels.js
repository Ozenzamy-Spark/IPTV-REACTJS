import './Channels.css';



function Channels() {
    return (
        <section className='Channels' id="channels">
            <center><img src={process.env.PUBLIC_URL + '/assets/img/channelList.webp'} alt='Channels list'/></center>
        </section>
    );
}


export default Channels;