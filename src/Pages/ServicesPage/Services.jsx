import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-32">
            <div className="p-4 mt-40 lg:mt-0 text-center">
                <div className="space-y-5">
                    <h4 className="text-xl font-bold text-[#FF3811]">Service</h4>
                    <h5 className=" text-4xl lg:text-5xl font-bold text-[#151515]">
                        Our Service Area
                    </h5>
                    <p className="py-6 text-base font-normal text-[#737373] lg:w-2/4 mx-auto">
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly
                        believable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Services;
