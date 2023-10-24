import { AiOutlineGoogle, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="footer p-10 text-white bg-[#151515] h-96">
            <aside>
                <div>
                <img className='w-20' src="https://i.ibb.co/b6gm9NZ/logo.png" alt="" />
                <p>Edwin Diaz is a software and web <br />technologies engineer, a life coach<br /> trainer who is also a serial.</p>
                </div>
                <div className='flex text-xl gap-3 '>
                <AiOutlineGoogle></AiOutlineGoogle>
                <AiOutlineTwitter></AiOutlineTwitter>
                <AiFillInstagram></AiFillInstagram>
                <AiFillLinkedin></AiFillLinkedin>
                </div>

            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;