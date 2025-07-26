import google from '../../../assets/google.png'
import dribble from '../../../assets/dribbble.png'
import linkedin from '../../../assets/linkedin.png'
import amazon from '../../../assets/amazon.png'
import medium from '../../../assets/medium.png'
import spotify from '../../../assets/spotify.png'


const Clients = () => {
    return (
        <div className="lg:px-32 py-10 bg-[#ffffff]">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-[#132238]">Happy Clients</h2>
                <p className="py-3 text-[#87909D]">
                    There are many variations of passages of Lorem Ipsum available,<br/>
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6'>
                <img src={google} alt="" />
                <img src={dribble} alt="" />
                <img src={linkedin} alt="" />
                <img src={amazon} alt="" />
                <img src={medium} alt="" />
                <img src={spotify} alt="" />
            </div>
        </div>
    );
};

export default Clients;