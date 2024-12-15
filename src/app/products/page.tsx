import { products } from '@/utils/mock';
import ProductCard from '@/components/ProductCard';
import { client } from '@/lib/client';
import { Image as IImage } from 'sanity'



import { StaticImageData } from 'next/image';


const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price, product_image, cloth_type -> {
      cloth_tyoey_name
    }, product_care, cloth_category -> {
      cloth_category_name
    }, title, product_details, _id
  }`)
  return res
}


interface IProduct {
  _id: string,
  title: string,
  price: number,
  cloth_type_name: string,
  product_details: string,
  cloth_category: IClothCategory,
  cloth_category_name: string,
  product_image: IImage[],
  product_care: string[],
}

interface IClothCategory {
  cloth_category_name: string
}

const AllProducts = async () => {

  const data: IProduct[] = await getProductData()

  return (


    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-28 flex flex-col items-center">
      {/* Decorative Background Animations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-16 animate-fade-in-up">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((product) => {
          const categoryName = product.cloth_category?.cloth_category_name ?? "Unknown Category";
          return (
            <ProductCard
              id={product._id}
              key={product._id}
              title={product.title}
              price={product.price}
              img={product.product_image as Array<IImage>}
              category={categoryName}
            />
          );
        })}
      </div>
    </section>


    // <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-28 flex flex-col items-center">
    //   {/* Decorative Circles */}
    //   <div className="absolute inset-0">
    //     <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
    //     <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
    //   </div>

    //   <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 mb-16 animate-fade-in-up">Our Products</h2>

    //   <div className="flex flex-wrap justify-center gap-12">
    //     {data.length > 0 ? data.map((product) => {
    //       const categoryName = product.cloth_category?.cloth_category_name ?? "Unknown Category";
    //       return (
    //         <ProductCard
    //           id={product._id}
    //           key={product._id}
    //           title={product.title}
    //           price={product.price}
    //           img={product.product_image as Array<IImage>}
    //           category={categoryName}
    //         />
    //       );
    //     }) : <p>No Product Found</p>}
    //   </div>
    // </section>
    // <div className='flex justify-evenly mt-16 py-10 flex-wrap'>
    //   {
    //     data.map((product) => {
    //       return (
    //         <ProductCard id={product._id} key={product._id} title={product.title} price={product.price} img={product.product_image as Array<IImage>} category={product.cloth_category.cloth_category_name} />
    //       )
    //     })
    //   }

    // </div>
  )
}

export default AllProducts