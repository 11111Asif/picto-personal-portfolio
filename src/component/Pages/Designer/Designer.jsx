import nt14 from '../../../assets/unsplash_wKOKidNT14w.png'

const Designer = () => {
    return (
        <div className='lg:px-32 bg-[#ffffff]'>
            <div className="hero ">
                <div className="hero-content flex-col shadow-2xl lg:flex-row">
                    <img
                        src={nt14}
                        className="w-[424px] h-[504px] rounded-lg" />
                    <div>
                        <h1 className="text-4xl text-black font-bold">I am Professional User<br /> Experience Designer</h1>
                        <p className="py-6 text-black">
                            I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                        </p>
                        <p className='text-black'>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        <div className='mt-10'>
                            <button className="btn btn-primary">Get Started</button>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;