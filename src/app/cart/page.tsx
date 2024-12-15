// cart.tsx
// 'use client'
// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Image as IImage } from 'sanity';
// import { urlForImage } from '@/lib/image';
// import { client } from '@/lib/client';
// import Quantity from '@/components/Quantity';
// import getStripePromise from "@/lib/stripe"
// import Checkout from '@/components/checkout';
// import { toast } from 'react-hot-toast';


// const getProductData = async () => {
//     const res = await client.fetch(`*[_type=="product"]{
//     price, product_image, cloth_type -> {
//       cloth_tyoey_name
//     }, product_care, cloth_category -> {
//       cloth_category_name
//     }, title, product_details, _id
//   }`);
//     return res;
// };

// interface IProduct {
//     _id: string;
//     title: string;
//     price: number;
//     cloth_type: IClothType;
//     product_details: string;
//     cloth_category: IClothCategory;
//     cloth_category_name: string;
//     product_image: IImage[];
//     product_care: string[];
// }

// interface IClothType {
//     cloth_tyoey_name: string;
// }

// interface IClothCategory {
//     cloth_category_name: string;
// }

// const getAddToCartProduct = async () => {
//     const res = await fetch('api/cart', {
//         method: 'GET',
//     });
//     const result = await res.json();
//     return result;
// };

// interface CartData {
//     res: Array<{ id: number; user_id: string; product_id: string; quantity: number }>;
// }

// const handleCheckout = async (filteredProducts: any) => {
//     const response = await fetch('/api/stripe-session/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         cache: 'no-cache',
//         body: JSON.stringify({
//             filteredProducts
//         }),
//     })

//     const stripe = await getStripePromise()

//     const data = await response.json()

//     if (data.session) {
//         stripe?.redirectToCheckout({ sessionId: data.session.id })
//         toast.success('Checkout Successfully')
//     }
// }

// const Cart = () => {
//     const [products, setProducts] = useState<IProduct[]>([]);
//     const [data, setData] = useState<CartData | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const productsData: IProduct[] = await getProductData();
//             setProducts(productsData);

//             const cartData: CartData | null = await getAddToCartProduct();
//             setData(cartData);
//         };

//         fetchData();
//     }, []);

//     const filteredProducts = useMemo(() => {
//         if (!data) {
//             return [];
//         }

//         const product_data =  products.filter((product) => {
//             data.res.some((item) => item.product_id === product._id)}
//         );

//         return product_data;
//     }, [data, products]);

//     const handleQuantityChange = (productId: string, quantity: number) => {
//         if (data) {
//             const updatedData = {
//                 res: data.res.map((item) => {
//                     if (item.product_id === productId) {
//                         return { ...item, quantity };
//                     }
//                     return item;
//                 }),
//             };
//             setData(updatedData);
//         }
//     };

//     const calculateTotalQuantity = () => {
//         let totalQuantity = 0;
//         filteredProducts.forEach((product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             if (item) {
//                 totalQuantity += item.quantity;
//             }
//         });
//         return totalQuantity;
//     };

//     const calculateSubtotal = () => {
//         let subtotal = 0;
//         filteredProducts.forEach((product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             if (item) {
//                 subtotal += product.price * item.quantity;
//             }
//         });
//         return subtotal;
//     };

//     const totalQuantity = calculateTotalQuantity();
//     const subtotal = calculateSubtotal();
//     const shipping = 10;
//     const total = subtotal + shipping;














// 'use client'
// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Image as IImage } from 'sanity';
// import { urlForImage } from '@/lib/image';
// import { client } from '@/lib/client';
// import Quantity from '@/components/Quantity';
// import getStripePromise from "@/lib/stripe"
// import Checkout from '@/components/checkout';
// import { toast } from 'react-hot-toast';


// const getProductData = async () => {
//     const res = await client.fetch(`*[_type=="product"]{
//     price, product_image, cloth_type -> {
//       cloth_tyoey_name
//     }, product_care, cloth_category -> {
//       cloth_category_name
//     }, title, product_details, _id
//   }`);
//     return res;
// };

// interface IProduct {
//     _id: string;
//     title: string;
//     price: number;
//     cloth_type: IClothType;
//     product_details: string;
//     cloth_category: IClothCategory;
//     cloth_category_name: string;
//     product_image: IImage[];
//     product_care: string[];
// }

// interface IClothType {
//     cloth_tyoey_name: string;
// }

// interface IClothCategory {
//     cloth_category_name: string;
// }

// const getAddToCartProduct = async () => {
//     const res = await fetch('api/cart', {
//         method: 'GET',
//     });
//     const result = await res.json();
//     return result;
// };

// interface CartData {
//     res: Array<{ id: number; user_id: string; product_id: string; quantity: number }>;
// }

// const handleCheckout = async (filteredProducts: any) => {
//     const response = await fetch('/api/stripe-session/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         cache: 'no-cache',
//         body: JSON.stringify({
//             filteredProducts
//         }),
//     })

//     const stripe = await getStripePromise()

//     const data = await response.json()

//     if (data.session) {
//         stripe?.redirectToCheckout({ sessionId: data.session.id })
//         toast.success('Checkout Successfully')
//     }
// }

// const Cart = () => {
//     const [products, setProducts] = useState<IProduct[]>([]);
//     const [data, setData] = useState<CartData | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const productsData: IProduct[] = await getProductData();
//             setProducts(productsData);

//             const cartData: CartData | null = await getAddToCartProduct();
//             setData(cartData);
//         };

//         fetchData();
//     }, []);

//     const filteredProducts = useMemo(() => {
//         if (!data) {
//             return [];
//         }

//         return products.filter((product) =>
//             data.res.some((item) => item.product_id === product._id)
//         );
//     }, [data, products]);

//     const handleQuantityChange = (productId: string, quantity: number) => {
//         if (data) {
//             const updatedData = {
//                 res: data.res.map((item) => {
//                     if (item.product_id === productId) {
//                         return { ...item, quantity };
//                     }
//                     return item;
//                 }),
//             };
//             setData(updatedData);
//         }
//     };

//     const calculateTotalQuantity = () => {
//         let totalQuantity = 0;
//         filteredProducts.forEach((product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             if (item) {
//                 totalQuantity += item.quantity;
//             }
//         });
//         return totalQuantity;
//     };

//     const calculateSubtotal = () => {
//         let subtotal = 0;
//         filteredProducts.forEach((product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             if (item) {
//                 subtotal += product.price * item.quantity;
//             }
//         });
//         return subtotal;
//     };

//     const totalQuantity = calculateTotalQuantity();
//     const subtotal = calculateSubtotal();
//     const shipping = 10;
//     const total = subtotal + shipping;

//     return (
//         <div>
//             <h1 className='text-lg font-extrabold'>Shopping Cart</h1>
//             {filteredProducts.length > 0 ? (
//                 <div className='flex justify-center'>
//                     <div className='w-2/3'>
//                         {filteredProducts.map((product) => {
//                             const quantity = data?.res.find((item) => item.product_id === product._id)?.quantity || 0;
//                             const price = product.price || 0;
//                             const totalPrice = quantity * price;

//                             return (
//                                 <div key={product._id} className='flex items-center space-x-4 my-4'>
//                                     <div>
//                                         <Image
//                                             width={380}
//                                             height={400}
//                                             className='w-20 h-20 object-cover'
//                                             src={urlForImage(product.product_image[0]).width(200).url()}
//                                             alt={product.title}
//                                         />
//                                     </div>
//                                     <div className='px-5'>
//                                         <h2 className='text-lg font-bold'>{product.title}</h2>
//                                         <p>{product.cloth_type.cloth_tyoey_name}</p>
//                                         <p className='text-lg font-bold'>Delivery Estimation</p>
//                                         <p className='text-yellow-300'>5 Working Days</p>
//                                         <div>
//                                             <div>${totalPrice}</div>
//                                             <div className='float-right'>
//                                                 <Quantity
//                                                     num={quantity}
//                                                     setNum={(value: number) => {
//                                                         handleQuantityChange(product._id, value);
//                                                     }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     <div className='w-1/3'>
//                         <h2 className='text-lg font-bold mb-4'>Order Summary</h2>
//                         <div className='bg-gray-100 p-4 rounded'>
//                             <p>Quantity: {totalQuantity}</p>
//                             <p>Subtotal: ${subtotal}</p>
//                             <p>Shipping: ${shipping}</p>
//                             <p className='text-xl font-bold mt-2'>Total: ${total}</p>
//                             {/* <Checkout filteredProducts={filteredProducts} /> */}
//                             <button onClick={() =>
//                                 handleCheckout(
//                                     filteredProducts.map((product) => ({
//                                         quantity:
//                                             data?.res.find((item) => item.product_id === product._id)?.quantity || 0,
//                                         price: product.price || 0,
//                                         title: product.title,
//                                     }))
//                                 )
//                             } className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded'>Checkout</button>

//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <p>No products found in the cart</p>
//             )}
//         </div>
//     );
// };

// export default Cart;































// 'use client';
// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Image as IImage } from 'sanity';
// import { urlForImage } from '@/lib/image';
// import { client } from '@/lib/client';
// import Quantity from '@/components/Quantity';
// import getStripePromise from '@/lib/stripe';
// import { toast } from 'react-hot-toast';

// const getProductData = async () => {
//     const res = await client.fetch(`*[_type=="product"]{
//         price, product_image, cloth_type -> { cloth_tyoey_name },
//         product_care, cloth_category -> { cloth_category_name },
//         title, product_details, _id
//     }`);
//     return res;
// };

// const getAddToCartProduct = async () => {
//     const res = await fetch('/api/cart', { method: 'GET' });
//     const result = await res.json();
//     return result;
// };

// const handleCheckout = async (filteredProducts: any) => {
//     const response = await fetch('/api/stripe-session/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         cache: 'no-cache',
//         body: JSON.stringify({ filteredProducts }),
//     });

//     const stripe = await getStripePromise();
//     const data = await response.json();

//     if (data.session) {
//         stripe?.redirectToCheckout({ sessionId: data.session.id });
//         toast.success('Redirecting to checkout...');
//     }
// };

// const Cart = () => {
//     const [products, setProducts] = useState<IProduct[]>([]);
//     const [data, setData] = useState<CartData | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const productsData = await getProductData();
//             setProducts(productsData);

//             const cartData = await getAddToCartProduct();
//             setData(cartData);
//         };
//         fetchData();
//     }, []);

//     const filteredProducts = useMemo(() => {
//         if (!data) return [];
//         return products.filter((product) =>
//             data.res.some((item) => item.product_id === product._id)
//         );
//     }, [data, products]);

//     const calculateTotalQuantity = () => {
//         return filteredProducts.reduce((total, product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             return total + (item?.quantity || 0);
//         }, 0);
//     };

//     const calculateSubtotal = () => {
//         return filteredProducts.reduce((subtotal, product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             return subtotal + (product.price * (item?.quantity || 0));
//         }, 0);
//     };

//     const handleQuantityChange = (productId: string, quantity: number) => {
//         if (data) {
//             const updatedData = {
//                 res: data.res.map((item) =>
//                     item.product_id === productId ? { ...item, quantity } : item
//                 ),
//             };
//             setData(updatedData);
//         }
//     };

//     const totalQuantity = calculateTotalQuantity();
//     const subtotal = calculateSubtotal();
//     const shipping = 10;
//     const total = subtotal + shipping;

//     return (
//         <div className="min-h-screen bg-gray-900 text-white py-10 px-4 md:px-16 animate-fade-in">
//             <h1 className="text-3xl font-extrabold text-center mb-10 animate-slide-in-down">
//                 Shopping Cart
//             </h1>
//             {filteredProducts.length > 0 ? (
//                 <div className="flex flex-col md:flex-row gap-10">
//                     {/* Product List */}
//                     <div className="flex-1 space-y-6 animate-fade-in-left">
//                         {filteredProducts.map((product) => {
//                             const quantity =
//                                 data?.res.find((item) => item.product_id === product._id)?.quantity || 0;
//                             const totalPrice = product.price * quantity;

//                             return (
//                                 <div
//                                     key={product._id}
//                                     className="flex items-center space-x-6 bg-gray-800 p-6 rounded-lg shadow-md hover:scale-[1.02] transform transition duration-300 ease-in-out"
//                                 >
//                                     <Image
//                                         src={urlForImage(product.product_image[0]).width(200).url()}
//                                         alt={product.title}
//                                         width={80}
//                                         height={80}
//                                         className="rounded-md shadow-md"
//                                     />
//                                     <div>
//                                         <h2 className="text-xl font-semibold">{product.title}</h2>
//                                         <p className="text-sm text-gray-400">{product.cloth_type.cloth_tyoey_name}</p>
//                                         <p className="text-yellow-400 font-semibold mt-1">
//                                             Delivery: 5 Working Days
//                                         </p>
//                                         <div className="flex justify-between items-center mt-2">
//                                             <div className="text-lg font-bold">${totalPrice}</div>
//                                             <Quantity
//                                                 num={quantity}
//                                                 setNum={(value) =>
//                                                     handleQuantityChange(product._id, value)
//                                                 }
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* Order Summary */}
//                     <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in-right">
//                         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//                         <div className="space-y-4">
//                             <p className="flex justify-between">
//                                 <span>Quantity:</span> <span>{totalQuantity}</span>
//                             </p>
//                             <p className="flex justify-between">
//                                 <span>Subtotal:</span> <span>${subtotal}</span>
//                             </p>
//                             <p className="flex justify-between">
//                                 <span>Shipping:</span> <span>${shipping}</span>
//                             </p>
//                             <p className="flex justify-between font-bold text-lg mt-4">
//                                 <span>Total:</span> <span>${total}</span>
//                             </p>
//                         </div>
//                         <button
//                             onClick={() =>
//                                 handleCheckout(
//                                     filteredProducts.map((product) => ({
//                                         quantity:
//                                             data?.res.find((item) => item.product_id === product._id)?.quantity || 0,
//                                         price: product.price,
//                                         title: product.title,
//                                     }))
//                                 )
//                             }
//                             className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full py-3 rounded-lg mt-6 shadow-lg hover:shadow-xl transition duration-300"
//                         >
//                             Checkout
//                         </button>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-400 animate-fade-in-up">
//                     Your cart is currently empty.
//                 </p>
//             )}
//         </div>
//     );
// };

// export default Cart;


















// 'use client';
// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Image as IImage } from 'sanity';
// import { urlForImage } from '@/lib/image';
// import { client } from '@/lib/client';
// import Quantity from '@/components/Quantity';
// import getStripePromise from '@/lib/stripe';
// import { toast } from 'react-hot-toast';

// const getProductData = async () => {
//     const res = await client.fetch(`*[_type=="product"]{
//         price, product_image, cloth_type -> { cloth_tyoey_name },
//         product_care, cloth_category -> { cloth_category_name },
//         title, product_details, _id
//     }`);
//     return res;
// };

// const getAddToCartProduct = async () => {
//     const res = await fetch('/api/cart', { method: 'GET' });
//     const result = await res.json();
//     return result;
// };

// const handleCheckout = async (filteredProducts) => {
//     const response = await fetch('/api/stripe-session/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         cache: 'no-cache',
//         body: JSON.stringify({ filteredProducts }),
//     });

//     const stripe = await getStripePromise();
//     const data = await response.json();

//     if (data.session) {
//         stripe?.redirectToCheckout({ sessionId: data.session.id });
//         toast.success('Redirecting to checkout...');
//     }
// };

// const Cart = () => {
//     const [products, setProducts] = useState([]);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const productsData = await getProductData();
//             setProducts(productsData);

//             const cartData = await getAddToCartProduct();
//             setData(cartData);
//         };
//         fetchData();
//     }, []);

//     const filteredProducts = useMemo(() => {
//         if (!data) return [];
//         return products.filter((product) =>
//             data.res.some((item) => item.product_id === product._id)
//         );
//     }, [data, products]);

//     const calculateTotalQuantity = () => {
//         return filteredProducts.reduce((total, product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             return total + (item?.quantity || 0);
//         }, 0);
//     };

//     const calculateSubtotal = () => {
//         return filteredProducts.reduce((subtotal, product) => {
//             const item = data?.res.find((item) => item.product_id === product._id);
//             return subtotal + (product.price * (item?.quantity || 0));
//         }, 0);
//     };

//     const handleQuantityChange = (productId, quantity) => {
//         if (data) {
//             const updatedData = {
//                 res: data.res.map((item) =>
//                     item.product_id === productId ? { ...item, quantity } : item
//                 ),
//             };
//             setData(updatedData);
//         }
//     };

//     const totalQuantity = calculateTotalQuantity();
//     const subtotal = calculateSubtotal();
//     const shipping = 10;
//     const total = subtotal + shipping;






'use client'
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Image as IImage } from 'sanity';
import { urlForImage } from '@/lib/image';
import { client } from '@/lib/client';
import Quantity from '@/components/Quantity';
import getStripePromise from "@/lib/stripe"
import Checkout from '@/components/checkout';
import { toast } from 'react-hot-toast';


const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
    price, product_image, cloth_type -> {
      cloth_tyoey_name
    }, product_care, cloth_category -> {
      cloth_category_name
    }, title, product_details, _id
  }`);
    return res;
};

interface IProduct {
    _id: string;
    title: string;
    price: number;
    cloth_type: IClothType;
    product_details: string;
    cloth_category: IClothCategory;
    cloth_category_name: string;
    product_image: IImage[];
    product_care: string[];
}

interface IClothType {
    cloth_tyoey_name: string;
}

interface IClothCategory {
    cloth_category_name: string;
}

const getAddToCartProduct = async () => {
    const res = await fetch('api/cart', {
        method: 'GET',
    });
    const result = await res.json();
    return result;
};

interface CartData {
    res: Array<{ id: number; user_id: string; product_id: string; quantity: number }>;
}

const handleCheckout = async (filteredProducts: any) => {
    const response = await fetch('/api/stripe-session/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        body: JSON.stringify({
            filteredProducts
        }),
    })

    const stripe = await getStripePromise()

    const data = await response.json()

    if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id })
        toast.success('Checkout Successfully')
    }
}

const Cart = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [data, setData] = useState<CartData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const productsData: IProduct[] = await getProductData();
            setProducts(productsData);

            const cartData: CartData | null = await getAddToCartProduct();
            setData(cartData);
        };

        fetchData();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!data) {
            return [];
        }

        return products.filter((product) =>
            data.res.some((item) => item.product_id === product._id)
        );
    }, [data, products]);

    const handleQuantityChange = (productId: string, quantity: number) => {
        if (data) {
            const updatedData = {
                res: data.res.map((item) => {
                    if (item.product_id === productId) {
                        return { ...item, quantity };
                    }
                    return item;
                }),
            };
            setData(updatedData);
        }
    };

    const calculateTotalQuantity = () => {
        let totalQuantity = 0;
        filteredProducts.forEach((product) => {
            const item = data?.res.find((item) => item.product_id === product._id);
            if (item) {
                totalQuantity += item.quantity;
            }
        });
        return totalQuantity;
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        filteredProducts.forEach((product) => {
            const item = data?.res.find((item) => item.product_id === product._id);
            if (item) {
                subtotal += product.price * item.quantity;
            }
        });
        return subtotal;
    };

    const totalQuantity = calculateTotalQuantity();
    const subtotal = calculateSubtotal();
    const shipping = 10;
    const total = subtotal + shipping;




    return (
        <div className="min-h-screen bg-gray-900 text-white py-10 px-4 md:px-16 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-16 animate-fade-in-up">
                Shopping Cart
            </h1>
            {filteredProducts.length > 0 ? (
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Product List */}
                    <div className="flex-1 space-y-6 animate-fade-in-left">
                        {filteredProducts.map((product) => {
                            const quantity =
                                data?.res.find((item) => item.product_id === product._id)?.quantity || 0;
                            const totalPrice = product.price * quantity;

                            return (
                                <div
                                    key={product._id}
                                    className="flex items-center space-x-6 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-[1.02] transform transition duration-300 ease-in-out hover:shadow-xl "
                                >
                                    <Image
                                        src={urlForImage(product.product_image[0]).width(200).url()}
                                        alt={product.title}
                                        width={80}
                                        height={80}
                                        className="rounded-md shadow-md"
                                    />
                                    <div>
                                        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-md">
                                            {product.title}
                                        </h2>
                                        <p className="text-sm text-gray-300">
                                            {product.cloth_type.cloth_tyoey_name}
                                        </p>
                                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold mt-1 animate-pulse">
                                            <span className='text-white animate-none'>Delivery:</span> 5 Working Days
                                        </p>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="text-lg font-bold text-white drop-shadow-lg">
                                                ${totalPrice}
                                            </div>
                                            <Quantity
                                                num={quantity}
                                                setNum={(value) =>
                                                    handleQuantityChange(product._id, value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full md:w-1/3 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md animate-fade-in-right">
                        <h2 className="text-2xl font-bold mb-4 text-white">Order Summary</h2>
                        <div className="space-y-4">
                            <p className="flex justify-between text-gray-300">
                                <span>Quantity:</span> <span>{totalQuantity}</span>
                            </p>
                            <p className="flex justify-between text-gray-300">
                                <span>Subtotal:</span> <span>${subtotal}</span>
                            </p>
                            <p className="flex justify-between text-gray-300">
                                <span>Shipping:</span> <span>${shipping}</span>
                            </p>
                            <p className="flex justify-between font-bold text-lg mt-4 text-white drop-shadow-md">
                                <span>Total:</span> <span>${total}</span>
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                handleCheckout(
                                    filteredProducts.map((product) => ({
                                        quantity:
                                            data?.res.find((item) => item.product_id === product._id)?.quantity || 0,
                                        price: product.price,
                                        title: product.title,
                                    }))
                                )
                            }
                            className="text-white font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 w-full py-3 rounded-lg mt-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 animate-bounce-in"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-pink-500 animate-fade-in-up">
                    Your cart is currently empty.
                </p>
            )}
        </div>
    );
};

export default Cart;

