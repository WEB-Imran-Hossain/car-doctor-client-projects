import { useContext } from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-12">
                    <img className="max-w-lg" src="https://i.ibb.co/gP35Kk5/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-10">

                    <div className="card-body">
                        <h1 className="text-4xl font-semibold text-center text-[#444]">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="div-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="div-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder=" Your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn text-white border-[#FF3811]  bg-[#FF3811] hover:border-[#FF3811] text-lg font-semibold rounded-md normal-case hover:bg-[#FF3811] ' type="submit" value="Sign Up" />
                            </div>
                            <div className='text-center space-y-4'>
                                <p>Or Sign In with</p>
                                <div className='flex space-x-4 justify-center'>
                                    <Link><FaFacebook></FaFacebook></Link>
                                    <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                    <Link><FaGoogle></FaGoogle></Link>
                                </div>
                                <p>Already have an account? <Link to="/login"><span className='text-[#FF3811] font-bold'>Log In</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;