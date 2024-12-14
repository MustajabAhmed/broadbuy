'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/lib/client";
import { urlForImage } from "@/lib/image";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-hot-toast";
import Quantity from "@/components/Quantity";
import heroImage from 'public/hero-image.jpg';

const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product"]{
      price,
      product_image,
      cloth_type->{
        cloth_type_name
      },
      product_care,
      cloth_category,
      title,
      product_details,
      _id
    }`
  );
  return res;
};

interface IProduct {
  _id: string;
  title: string;
  price: number;
  cloth_type_name: string;
  product_details: string;
  cloth_category: IClothCategory;
  product_image: { asset: { _type: string; _ref: string; url: any } }[]; // Ensure _type and _ref are included
  product_care: string[];
}

// interface IProduct {
//   _id: string;
//   title: string;
//   price: number;
//   cloth_type_name: string;
//   product_details: string;
//   cloth_category: IClothCategory;
//   product_image: { asset: { url: any } }[];
//   product_care: string[];
// }

interface IClothCategory {
  cloth_category_name: string;
}

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [productDetail, setProductDetail] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data: IProduct[] = await getProductData();
      const productDetails = data.filter((product) => product._id === params.id);
      const productDetail = productDetails[0];
      setProductDetail(productDetail);
    };

    fetchProductDetails();
  }, [params.id]);

  const handleAddToCart = async () => {
    dispatch(cartActions.addToCart({ quantity: quantity }));
    toast.success("Product Added Successfully");
    const res = await fetch("../api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: params.id,
        quantity: quantity,
      }),
    });

    const result = await res.json();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl"];
  const totalPrice = productDetail?.price ? productDetail.price * quantity : 0;

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-10 px-10 flex flex-col items-center">
      {/* Hero Section with Gradient and Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 mb-12 animate-fade-in-up">
        {productDetail.title}
      </h2>

      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 py-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative h-full w-full mb-4 overflow-hidden rounded-lg group">
            <Image
              width={380}
              height={400}
              className="object-cover object-top transition-transform duration-300 transform group-hover:scale-110"
              src={productDetail.product_image[0]?.asset ? urlForImage(productDetail.product_image[0].asset).width(200).url() : heroImage}
              alt={productDetail.title}
            />
            {/* Decorative Glow */}
            <div className="absolute -inset-2 bg-yellow-500/20 rounded-lg blur-lg animate-pulse"></div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl">{productDetail.title}</h1>
          <h2 className="text-base text-gray-400 font-semibold">{productDetail.cloth_type_name}</h2>
          <h3 className="text-sm text-yellow-500 mt-4">{productDetail.cloth_category.cloth_category_name}</h3>

          <div className="mt-6">
            <h3 className="text-xs font-semibold">SELECT SIZE</h3>
            <div className="flex gap-x-3 mt-3">
              {sizes.map((size) => (
                <div
                  key={size}
                  className="h-6 w-6 flex justify-center items-center duration-300 border rounded-full hover:shadow-xl"
                >
                  <span className="text-[10px] font-bold text-center text-gray-600">{size}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-x-3 mt-6 items-center">
              <h3 className="text-[10px] font-semibold">Quantity:</h3>
              <Quantity num={quantity} setNum={setQuantity} />
            </div>

            <div className="mt-5 flex items-center justify-between md:justify-start gap-x-4">
            {/* <Button >
                    Start Shopping
                </Button> */}
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-gray-900 font-bold text-lg px-10 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 animate-bounce-in"
              >
                Add to Cart
              </button>
              <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="mt-12 w-full md:w-3/4">
        <h1 className="text-2xl font-semibold mb-5 text-yellow-400">Product Information</h1>
        <div className="flex flex-col md:flex-row py-5 justify-start gap-x-9">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-yellow-600">PRODUCT DETAILS</h2>
            <p className="text-sm text-gray-300">{productDetail.product_details}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-start gap-x-9">
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-2 text-yellow-600">PRODUCT CARE</h2>
            <ul className="text-sm text-gray-300">
              {productDetail.product_care.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Page;
