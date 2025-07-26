import { IoMdArrowForward } from "react-icons/io";

const Together = () => {
    return (
        <div>
            <div className="hero bg-[#132238] py-12">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="lg:text-4xl font-bold text-[#ffffff]">Do you have Project Idia?
                            Let's discuss your project!</h1>
                        <p className="py-6 text-[#A5ACB5]">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                        </p>
                        <button className="w-[240px] flex items-center lg:ml-[135px] justify-center gap-3 text-xl h-[48px] rounded-md bg-[#A53DFF]">
                            Let’s work Together
                            <IoMdArrowForward className="text-xl mt-1"></IoMdArrowForward>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Together;