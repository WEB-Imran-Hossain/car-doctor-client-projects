import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineSearch } from 'react-icons/hi';


const Header = () => {
    const menu =
        <>
            <li><Link to="/" className="hover:bg-inherit ">Home</Link></li>
            <li><Link to="/about" className="hover:bg-inherit">About</Link></li>
            <li><Link to="/services" className="hover:bg-inherit">Services</Link></li>
            <li><Link to="/blog" className="hover:bg-inherit">Blog</Link></li>
            <li><Link to="/contact" className="hover:bg-inherit">Contact</Link></li>

        </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-lg font-semibold">
                        {menu}
                    </ul>
                </div>
                <Link to="/" className="text-xl">
                    <img className='w-20' src="https://i.ibb.co/b6gm9NZ/logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {menu}
                </ul>
            </div>
            
            <div className="navbar-end">
            <div className="text-2xl flex items-center">
                <HiOutlineShoppingBag className="mr-3"></HiOutlineShoppingBag>
                <HiOutlineSearch className="mr-3"></HiOutlineSearch>
            </div>
                <div>
                <button className="btn bg-inherit border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811]  hover:text-white text-lg font-semibold rounded-md capitalize ">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;