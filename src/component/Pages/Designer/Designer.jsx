import nt14 from '../../../assets/unsplash_wKOKidNT14w.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";


const Designer = () => {
    return (
        <div className='lg:px-32 bg-[#ffffff]'>
            <div className="hero ">
                <div className="hero-content flex-col shadow-2xl lg:flex-row">
                    <img
                        src={nt14}
                        className="w-[424px] relative h-[504px] rounded-lg" />
                    <div>
                        <h1 className="lg:text-4xl text-2xl text-black font-bold">I am Professional User<br /> Experience Designer</h1>
                        <p className="py-6 text-black">
                            I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                        </p>
                        <p className='text-black'>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        <div className='mt-10'>
                            <button className="w-[132px] h-[48px] rounded-md bg-[#A53DFF]">My Project</button>
                            <button className="w-[190px] relative h-[48px] rounded-md text-[#A53DFF] border ml-5"> Download CV</button>
                        </div>
                        <MdOutlineFileDownload className='absolute text-[#A53DFF] text-xl -mt-[35px] ml-[170px]'></MdOutlineFileDownload>
                    </div>

                </div>
            </div>
            <div className='absolute lg:-mt-[135px] -mt-[520px] ml-[90px] lg:ml-[95px] flex bg-[#ffffff] shadow-2xl items-center justify-center gap-5 w-[200px] lg:w-[264px] h-[72px]'>
                <FiFacebook className='text-[#A53DFF] text-xl lg:text-2xl'></FiFacebook>
                <IoBasketballOutline className='text-[#A53DFF] text-xl lg:text-2xl'></IoBasketballOutline>
                <FaInstagram className='text-[#A53DFF] text-xl lg:text-2xl'></FaInstagram>
                
                    <FaLinkedinIn className='text-[#A53DFF] text-xl lg:text-2xl'></FaLinkedinIn>
                
                    <FaBehance className='text-[#A53DFF] text-xl lg:text-2xl'></FaBehance>
            </div>
        </div>
    );
};

export default Designer;