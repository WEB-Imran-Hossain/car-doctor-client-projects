import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl border p-6 rounded-lg space-y-4 cursor-pointer">
            <figure className="">
                <img src={img} className="rounded" />
            </figure>
            <div className="card-body text-left p-0">
                <h2 className="text-2xl font-bold text-[#444]">{title}</h2>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
                <Link to={`/checkout/${_id}`}>
                    <AiOutlineArrowRight className="text-2xl text-[#FF3811]"></AiOutlineArrowRight>
                </Link>
                {/* <Link to={`/book/${_id}`}>
                <AiOutlineArrowRight className="text-2xl text-[#FF3811]"></AiOutlineArrowRight>
                </Link> */}
            </div>
        </div>
    );
};

export default ServiceCard;