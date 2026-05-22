import { getProducts } from "../data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = getProducts();
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to ShopHub
      </h1>
      <p className="text-center mt-4 text-lg">
        Your one-stop shop for all your needs. Explore our wide range of
        products and enjoy seamless shopping experience.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
