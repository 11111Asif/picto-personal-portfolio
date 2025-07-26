import vector9 from '../../../assets/Vector9.png'
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const Form = () => {
    return (
        <div className="lg:px-32 bg-[#ffffff] py-10">
            <div className="hero bg-[#ffffff] shadow-2xl min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <p className="text-[#87909D] px-5">
                            There are many variations of passages of Lorem Ipsu available,<br />
                            but the majority have suffered alte.
                        </p>
                        <form class="max-w-[600px] mx-auto p-4 space-y-4">

                            <div className="">
                                <label class="block text-sm font-medium text-purple-500 mb-1">Name*</label>
                                <input type="text" class="w-full border-b-2 border-purple-400 bg-[#ffffff]" required />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-600 mb-1">Email*</label>
                                <input type="email" class="w-full border-b border-gray-300 bg-[#ffffff]" required />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-600 mb-1">Location</label>
                                <input type="text" class="w-full border-b border-gray-300 bg-[#ffffff]" />
                            </div>

                            <div class="flex flex-col md:flex-row md:space-x-4">
                                <div class="flex-1">
                                    <label class="block text-sm font-medium text-gray-600 mb-1">Budget*</label>
                                    <input type="text" class="w-full border-b border-gray-300 bg-[#ffffff]" required />
                                </div>
                                <div class="flex-1 mt-4 md:mt-0">
                                    <label class="block text-sm font-medium text-gray-600 mb-1">Subject*</label>
                                    <input type="text" class="w-full border-b border-gray-300 bg-[#ffffff]" required />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-600 mb-1">Message*</label>
                                <textarea class="w-full border-b border-gray-300 bg-[#ffffff]" rows="4" required></textarea>
                            </div>

                            <div class="pt-4 w-[241px] h-[48px]">
                                <button type="submit" class="bg-[#A53DFF] flex gap-3 text-white px-6 py-2 rounded">
                                    Submit
                                    <img src={vector9} alt="" />
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="lg:w-[480px]">
                        <h1 className="text-4xl text-[#132238] font-bold">Let’s discuss your Project</h1>
                        <p className="py-4 text-[#87909D]">
                            There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.
                        </p>
                        <div className='flex gap-2 w-[336px] py-6 px-4 h-[96px] bg-[#ffffff] shadow-2xl rounded-lg'>
                            <div className='w-[48px] h-[48px] py-3 px-3 rounded-md bg-[#A53DFF]'>
                                <CiLocationOn className='text-2xl font-bold'></CiLocationOn>
                            </div>
                            <div>
                                <p className='text-[#424E60]'>Address:</p>
                                <p className='text-xl text-[#132238]'>New Mexico 31134</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 w-[336px] py-6 px-4 h-[96px] bg-[#ffffff] shadow-2xl rounded-lg'>
                            <div className='w-[48px] h-[48px] py-3 px-3 rounded-md bg-[#EDD8FF]'>
                                <CiLocationOn className='text-2xl text-[#A53DFF] font-bold'></CiLocationOn>
                            </div>
                            <div>
                                <p className='text-[#424E60]'>My Email:</p>
                                <p className='text-xl text-[#132238]'>mymail@mail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 w-[336px] py-6 px-4 h-[96px] bg-[#ffffff] shadow-2xl rounded-lg'>
                            <div className='w-[48px] h-[48px] py-3 px-3 rounded-md bg-[#EDD8FF]'>
                                <CiLocationOn className='text-2xl font-bold text-[#A53DFF]'></CiLocationOn>
                            </div>
                            <div>
                                <p className='text-[#424E60]'>Call Me Now:</p>
                                <p className='text-xl text-[#132238]'>00-1234 00000</p>
                            </div>
                        </div>
                        <div className='flex bg-[#ffffff] rounded-lg justify-center items-center mt-4 gap-5 w-[200px] lg:w-[288px] h-[72px]'>
                            <div className='w-[48px] h-[48px] bg-[#A53DFF] py-3 px-3 rounded-md'>
                                <FiFacebook className='text-xl lg:text-2xl'></FiFacebook>
                            </div>
                            <IoBasketballOutline className='text-[#A53DFF] text-xl lg:text-2xl'></IoBasketballOutline>
                            <FaInstagram className='text-[#A53DFF] text-xl lg:text-2xl'></FaInstagram>

                            <FaLinkedinIn className='text-[#A53DFF] text-xl lg:text-2xl'></FaLinkedinIn>

                            <FaBehance className='text-[#A53DFF] text-xl lg:text-2xl'></FaBehance>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;