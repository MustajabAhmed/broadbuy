import logo from '../../../public/logo-1.png';
import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-10 md:px-28 relative bg-gradient-to-b from-gray-900 via-gray-800 to-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4">
                    <Link href={'/'}>
                    <Image
                        className="w-40 hover:scale-105 transition-transform duration-300 ease-in-out"
                        src={logo}
                        alt="logo"
                    />
                </Link>
                    </h2>
                    <p className="text-gray-400">Your one-stop shop for all your needs. From clothing to accessories, find everything in one place with the best deals!</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white transition-colors duration-300">
                            <a href="/category/female">Female</a>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <a href="/category/male">Male</a>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <a href="/category/kids">Kids</a>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <a href="/category/youngster">Youngster</a>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <a href="/products">All Products</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li>Email: <a href="mailto:support@broadbuy.com" className="hover:text-white transition-colors duration-300">support@broadbuy.com</a></li>
                        <li>Phone: <a href="tel:+123456789" className="hover:text-white transition-colors duration-300">+123 456 789</a></li>
                        <li>Address: 123 Market St, Commerce City</li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <i className="fab fa-facebook-f text-white text-2xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <i className="fab fa-twitter text-white text-2xl"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <i className="fab fa-instagram text-white text-2xl"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <i className="fab fa-linkedin-in text-white text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} BroadBuy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
