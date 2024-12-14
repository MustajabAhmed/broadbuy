import ProductCard from "@/components/ProductCard"
import { products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import { client } from '@/lib/client';
import { Image as IImage } from 'sanity'

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

export default async function Page({ params }: { params: { slug: string } }) {
  const data: IProduct[] = await getProductData()
  const productDetails = data.filter((product) => product.cloth_category.cloth_category_name.toLowerCase() === params.slug)
  return (

    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-28 flex flex-col items-center">
      {/* Decorative Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {productDetails.length > 0 ? productDetails.map((product) => {
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
        }) : <p>No Product Found</p>}
      </div>
    </section>
  )
}