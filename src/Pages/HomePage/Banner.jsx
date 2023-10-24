import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/cbMT6qt/5.jpg" className="w-full" />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-lg font-normal'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn hover:bg-inherit text-white border-[#FF3811]  bg-[#FF3811] hover:border text-lg font-semibold rounded-md normal-case ">Discover More</button>
                            <button className="btn bg-inherit text-white border-[#FFF]  hover:bg-[#FF3811] hover:border-[#FF3811] text-lg font-semibold rounded-md normal-case">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-[#ffffff33] hover:bg-[#FF3811] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sQLvD4j/6.jpg" className="w-full" />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-lg font-normal'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn hover:bg-inherit text-white border-[#FF3811]  bg-[#FF3811] hover:border text-lg font-semibold rounded-md normal-case ">Discover More</button>
                            <button className="btn bg-inherit text-white border-[#FFF]  hover:bg-[#FF3811] hover:border-[#FF3811] text-lg font-semibold rounded-md normal-case">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-[#ffffff33] hover:bg-[#FF3811] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/55LWP2R/2.jpg" className="w-full" />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-lg font-normal'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn hover:bg-inherit text-white border-[#FF3811]  bg-[#FF3811] hover:border text-lg font-semibold rounded-md normal-case ">Discover More</button>
                            <button className="btn bg-inherit text-white border-[#FFF]  hover:bg-[#FF3811] hover:border-[#FF3811] text-lg font-semibold rounded-md normal-case">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-[#ffffff33] hover:bg-[#FF3811] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QPCnPS3/1.jpg" className="w-full" />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-lg font-normal'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn hover:bg-inherit text-white border-[#FF3811]  bg-[#FF3811] hover:border text-lg font-semibold rounded-md normal-case ">Discover More</button>
                            <button className="btn bg-inherit text-white border-[#FFF]  hover:bg-[#FF3811] hover:border-[#FF3811] text-lg font-semibold rounded-md normal-case">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-[#ffffff33] hover:bg-[#FF3811] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;