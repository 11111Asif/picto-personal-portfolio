

const Header = () => {
    return (
        <div className="w-auto lg:h-[96px] h-[180px] bg-[#ffffff] py-5 lg:px-32 ">
            <div className="lg:flex text-end items-center lg:justify-between">
                <div className="flex gap-5 justify-center">
                    <div className="w-[56px] h-[56px] bg-[#A53DFF] rounded-full">
                        <p className="text-2xl py-2.5 font-bold text-center">B</p>
                    </div>
                    <h2 className="text-3xl text-black font-bold py-2.5">Brooklyn</h2>
                </div>
                <div className="lg:flex gap-5 text-center">
                    <ul className="flex text-center gap-3 px-2 lg:gap-7 py-2.5">
                        <li className="text-black"><a>Home</a></li>
                        <li className="text-black"><a>About</a></li>
                        <li className="text-black"><a>Process</a></li>
                        <li className="text-black"><a>Portfolio</a></li>
                        <li className="text-black"><a>Blog</a></li>
                        <li className="text-black"><a>Services</a></li>
                    </ul>
                    <button className="w-[111px] h-[48px] bg-[#A53DFF] rounded-lg">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Header;