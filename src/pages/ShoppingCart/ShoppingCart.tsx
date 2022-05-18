import { useContext } from "react";
import CartContext from "../../CartContext";
import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import SubmitButton from "../../components/SubmitBtn/SubmitBtn";

const ShoppingCart: React.FC = () => {
  const { cartValue } = useContext(CartContext);

  return (
    <ProductList>
      <SubmitButton title="checkout" />
      {cartValue &&
        cartValue.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </ProductList>
  );
};

export default ShoppingCart;
