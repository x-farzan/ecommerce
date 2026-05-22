import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/product";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const grabProduct = getProductById(id);

    if (!grabProduct) {
      return navigate("/");
    }

    setProduct(grabProduct);
  }, [id]);

  return (
    <>
      {!product ? (
        <h3>loading ...</h3>
      ) : (
        <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-4 my-10 mx-45 shadow-lg p-10">
          <div>
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className="relative mt-15">
            <h2 className="text-3xl">{product?.name}</h2>
            <span className="text-blue-800 text-2xl">
              ${product?.price.toFixed(2)}
            </span>
            <p className="text-sm mt-10">{product?.description}</p>
            <button className="btn btn-primary mt-10 flex justify-end">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
