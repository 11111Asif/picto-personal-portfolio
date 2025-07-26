

const Testimonial = () => {
    return (
        <div className="bg-[#ffffff]">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-[600px]">
                        <h1 className="text-5xl font-bold text-[#333333]">Testimonial</h1>
                        <p className="py-6 text-[#87909D]">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                        </p>
                        <p className="py-10 text-[#2B384C]">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>
                        <h4 className="text-[#000000] font-bold">Esther Howard</h4>
                        <p className="text-black">
                            Managing Director, ABC company
                        </p>
                        <div className='py-8 flex gap-2 justify-center'>
                            <p className='w-[30px] rounded-lg h-[8px] bg-[#210C33]'></p>
                            <p className='w-[8px] h-[8px] bg-[#C3C7CE] rounded-full'></p>
                            <p className='w-[8px] h-[8px] bg-[#C3C7CE] rounded-full'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;