import ProductCard from '@/components/ProductCard';
import { client } from '@/lib/client';
import { Image as IImage } from 'sanity'

const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price, product_image, cloth_type -> {
      cloth_type_name
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
  cloth_category: IClothCategory | null,
  cloth_category_name: string,
  product_image: IImage[],
  product_care: string[],
}

interface IClothCategory {
  cloth_category_name: string | null
}

const ProductList = async () => {
  const data: IProduct[] = await getProductData()
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-800 to-black text-white py-20 px-6 md:px-28 flex flex-col items-center">
      {/* Decorative Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 mb-16 animate-fade-in-up">Our Latest Products</h2>

      <div className="flex flex-wrap justify-center gap-12">
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
  );
};

export default ProductList;
