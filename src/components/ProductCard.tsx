'use client'
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/lib/image';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  img: IImage[];
  category: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, title, img, price, category }) => {

  return (
    <Link href={`/products/${id}`}>
      <div className="relative rounded-2xl py-5 mx-3 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rounded-lg bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white p-6  overflow-hidden group">

        {/* Image Section */}
        <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
          <Image
            width={380}
            height={400}
            className="object-cover object-top transition-transform duration-300 transform group-hover:scale-110"
            src={urlForImage(img[0]).width(200).url()}
            alt={title}
          />
          {/* Decorative Glow */}
          <div className="absolute -inset-2 bg-yellow-500/20 rounded-lg blur-lg"></div>
        </div>

        {/* Product Information */}
        <h3 className="font-bold text-xl group-hover:text-yellow-400 transition-colors duration-300">{title}</h3>
        <p className="font-bold text-lg mt-2 text-yellow-500">${price}</p>
        <p className="font-bold text-sm mt-1 text-gray-300">
          Category: <span className="text-base font-normal capitalize">{category}</span>
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 -z-10 group-hover:bg-yellow-500/10 rounded-lg blur-md"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
