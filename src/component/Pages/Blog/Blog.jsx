import ia from '../../../assets/unsplash_phIFdC6lA4E.png'
import ylv from '../../../assets/unsplash_z0MDyylvY1k.png'
import n60 from '../../../assets/unsplash_coj7UZ7iN60.png'
import czs from '../../../assets/unsplash_-udZnjsCzsE.png'

const Blog = () => {
    return (
        <div className="lg:px-32 bg-[#ffffff]">
            <div className="text-center py-12 space-y-3">
                <h2 className="text-4xl text-black font-bold">Blog</h2>
                <p className="text-[#87909D]">There are many variations of passages of Lorem Ipsum available,<br />
                    but the majority have suffered alteration.</p>
            </div>
            <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card bg-[#ffffff] w-auto shadow-2xl">
                    <figure>
                        <img
                            src={ia}
                            alt="" />
                    </figure>
                    <div className="card-body lg:px-5 px-8">
                        <h2 className="card-title"></h2>
                        <div className="flex">
                            <p className="text-[#87909D]">22 Oct, 2020</p>
                            <p className="text-[#87909D]">/</p>
                            <p className="text-[#87909D]">246 Comments</p>
                        </div>
                        <p className="text-xl text-black">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                        
                    </div>
                </div>
                <div className="card bg-[#ffffff] w-auto shadow-2xl">
                    <figure>
                        <img
                            src={ylv}
                            alt="" />
                    </figure>
                    <div className="card-body lg:px-5 px-8">
                        <h2 className="card-title"></h2>
                        <div className="flex">
                            <p className="text-[#87909D]">22 Oct, 2020</p>
                            <p className="text-[#87909D]">/</p>
                            <p className="text-[#87909D]">246 Comments</p>
                        </div>
                        <p className="text-xl text-black">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                        
                    </div>
                </div>
                <div className="card bg-[#ffffff] w-auto shadow-2xl">
                    <figure>
                        <img
                            src={n60}
                            alt="" />
                    </figure>
                    <div className="card-body lg:px-5 px-8">
                        <h2 className="card-title"></h2>
                        <div className="flex">
                            <p className="text-[#87909D]">22 Oct, 2020</p>
                            <p className="text-[#87909D]">/</p>
                            <p className="text-[#87909D]">246 Comments</p>
                        </div>
                        <p className="text-xl text-black">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                        
                    </div>
                </div>
                <div className="card bg-[#ffffff] w-auto shadow-2xl">
                    <figure>
                        <img
                            src={czs}
                            alt="" />
                    </figure>
                    <div className="card-body lg:px-5 px-8">
                        <h2 className="card-title"></h2>
                        <div className="flex">
                            <p className="text-[#87909D]">22 Oct, 2020</p>
                            <p className="text-[#87909D]">/</p>
                            <p className="text-[#87909D]">246 Comments</p>
                        </div>
                        <p className="text-xl text-black">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                        
                    </div>
                </div>
            </div>
            <div className='py-8 flex gap-2 justify-center'>
                <p className='w-[30px] rounded-lg h-[8px] bg-[#210C33]'></p>
                <p className='w-[8px] h-[8px] bg-[#C3C7CE] rounded-full'></p>
                <p className='w-[8px] h-[8px] bg-[#C3C7CE] rounded-full'></p>
            </div>
        </div>
    );
};

export default Blog;