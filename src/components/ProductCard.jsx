import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img className="w-full object-cover h-60" src={image} alt={name} />
      <div className="m-4">
        <h4 className="font-bold">{name}</h4>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="m-4 space-x-2">
        <Link className="btn btn-secondary">View Details</Link>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
