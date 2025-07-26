import vector5 from '../../../assets/Vector5.png'
import vector6 from '../../../assets/Vector6.png'
import vector7 from '../../../assets/Vector7.png'
import vector8 from '../../../assets/Vector8.png'

const Work = () => {
    return (
        <div className=''>
            <div className="hero bg-[#F0F1F3] min-h-screen lg:px-32">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="card card-compact bg-[#ffffff] lg:w-[250px] w-[312px] h-[271px] lg:h-[250px] shadow-xl">
                            <figure className='bg-[#A53DFF] ml-6 mt-6 w-[72px] h-[72px] rounded-md'>
                                <img
                                    src={vector7}
                                    alt="" className='' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-black">1. Research</h2>
                                <p className='text-[#556070]'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br/> Nulla purus arcu.</p>
                               
                            </div>
                        </div>
                        <div className="card card-compact bg-[#ffffff] mt-4 lg:w-[250px] w-[312px] h-[271px] lg:h-[250px] shadow-xl">
                            <figure className='bg-[#EDD8FF80] ml-6 mt-6 w-[72px] h-[72px] rounded-md'>
                                <img
                                    src={vector6}
                                    alt="" className='' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-black">1. Research</h2>
                                <p className='text-[#556070]'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br/> Nulla purus arcu.</p>
                               
                            </div>
                        </div>
                        <div className="card card-compact bg-[#ffffff] lg:w-[250px] w-[312px] h-[271px] lg:h-[250px] shadow-xl">
                            <figure className='bg-[#EDD8FF80] ml-6 mt-6 w-[72px] h-[72px] rounded-md'>
                                <img
                                    src={vector8}
                                    alt="" className='' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-black">1. Research</h2>
                                <p className='text-[#556070]'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br/> Nulla purus arcu.</p>
                               
                            </div>
                        </div>
                        <div className="card card-compact bg-[#ffffff] mt-4 lg:w-[250px] w-[312px] h-[271px] lg:h-[250px] shadow-xl">
                            <figure className='bg-[#EDD8FF80] ml-6 mt-6 w-[72px] h-[72px] rounded-md'>
                                <img
                                    src={vector5}
                                    alt="" className='' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-black">1. Research</h2>
                                <p className='text-[#556070]'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br/> Nulla purus arcu.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[450px]'>
                        <h1 className="lg:text-5xl text-3xl font-bold text-black">Work Process</h1>
                        <p className="py-6 text-[#697484]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                        </p>
                        <p className='text-[#697484] py-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;