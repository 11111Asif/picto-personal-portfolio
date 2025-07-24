import nt14 from '../../../assets/unsplash_wKOKidNT14w.png'

const Banner = () => {
    return (
        <div className='lg:px-32 bg-[#ffffff]'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={nt14}
                        className="lg:w-[536px] w-full lg:h-[636px] rounded-lg" />
                    <div className='lg:ml-[90px]'>
                        <h1 className="lg:text-5xl text-3xl font-bold text-black">Hello, I’m<br />
                            Brooklyn Gilbert</h1>
                        <p className="py-6 text-black">
                            I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                        </p>
                        <button className="w-[126px] h-[48px] bg-[#A53DFF] rounded-lg">Say Hello!</button>
                        <div className='mt-12 lg:flex gap-1'>
                            <div className='bg-[#edd8ff80] w-full lg:w-[170px] h-[106px] text-center py-6'>
                                <h3 className='text-black font-bold'>15 Y.</h3>
                                <p className='text-black'>Experience</p>
                            </div>
                            <div className='bg-[#edd8ff80] lg:mt-0 mt-3 w-full lg:w-[170px] h-[106px] text-center py-6'>
                                <h3 className='text-black font-bold'>250 +</h3>
                                <p className='text-black'>Project Completed</p>
                            </div>
                            <div className='bg-[#edd8ff80] w-full lg:mt-0 mt-3 lg:w-[170px] h-[106px] text-center py-6'>
                                <h3 className='text-black font-bold'>58</h3>
                                <p className='text-black'>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;