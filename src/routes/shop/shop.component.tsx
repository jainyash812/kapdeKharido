import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { ProductContext } from "../../context/products.context";
import "./shop.styles.scss";
interface ShopDataItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <h1>Shop Page</h1>
      <div className="shop-product-container">
        {products.map((productItem: ShopDataItem) => {
          return (
            <ProductCard
              key={`${productItem.id}${productItem.name}${Math.random() * 100}`}
              product={productItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
