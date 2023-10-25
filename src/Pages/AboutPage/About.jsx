

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/92KDDhF/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/XyJh4JT/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className="lg:w-1/2">
                    <h4 className="text-xl font-bold text-[#FF3811]">About Us</h4>
                    <h5 className="text-5xl font-bold text-[#151515]">We are qualified & of experience in this field</h5>
                    <p className="py-6 text-base font-normal text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border hover:text-[#FF3811] text-lg font-semibold rounded-md normal-case ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;