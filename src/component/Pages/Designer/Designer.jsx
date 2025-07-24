import nt14 from '../../../assets/unsplash_wKOKidNT14w.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";


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
            <div className='absolute -mt-[200px] ml-[200px]'>
                <FiFacebook className='text-black'></FiFacebook>
            </div>
        </div>
    );
};

export default Designer;