import { useLoaderData } from "react-router-dom";

const BookService = () => {
    const service = useLoaderData();
    const { title, img, price, _id } = service;
    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Title: {title}</h2>
            <p className='text-2xl font-bold text-center'>Price: {price}</p>
            <form>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='fname' placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lname' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='number' placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered h-32" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn text-white border-[#FF3811]  bg-[#FF3811] hover:border-[#FF3811] text-xl font-semibold rounded-md normal-case hover:bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookService;