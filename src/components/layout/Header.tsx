'use client';

import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useState } from 'react';

const Header = () => {
    const cartValue = useSelector((state: RootState) => state.cart.totalQuantitiy);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white py-6 px-10 md:px-20 shadow-lg">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href={'/'}>
                    <Image
                        className="w-40 hover:scale-105 transition-transform duration-300 ease-in-out"
                        src={logo}
                        alt="logo"
                    />
                </Link>

                {/* Navigation - Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-9 text-gray-300">
                        <li className="text-lg hover:text-white transition-colors duration-300">
                            <Link href={'/category/female'}>Female</Link>
                        </li>
                        <li className="text-lg hover:text-white transition-colors duration-300">
                            <Link href={'/category/male'}>Male</Link>
                        </li>
                        <li className="text-lg hover:text-white transition-colors duration-300">
                            <Link href={'/category/kids'}>Kids</Link>
                        </li>
                        <li className="text-lg hover:text-white transition-colors duration-300">
                            <Link href={'/category/youngster'}>Youngster</Link>
                        </li>
                        <li className="text-lg hover:text-white transition-colors duration-300">
                            <Link href={'/products'}>All Products</Link>
                        </li>
                    </ul>
                </nav>

                {/* Cart Icon */}
                <Link href={'/cart'}>
                    <div
                        className="h-12 w-12 rounded-full bg-gray-800 flex justify-center items-center relative hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        <span
                            className="absolute -right-1 -top-1 rounded-full bg-pink-500 h-5 w-5 text-white text-xs flex items-center justify-center animate-pulse"
                        >
                            {cartValue}
                        </span>
                        <ShoppingCart className="h-6 w-6 text-gray-300" />
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✖ Close' : '☰ Menu'}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="md:hidden mt-4 bg-gray-800 p-4 rounded-lg shadow-lg animate-fade-in-down"
                >
                    <ul className="flex flex-col gap-y-4 text-gray-300">
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href={'/category/female'}>Female</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href={'/category/male'}>Male</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href={'/category/kids'}>Kids</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href={'/category/youngster'}>Youngster</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href={'/products'}>All Products</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;

