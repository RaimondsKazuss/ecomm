import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import SubmitButton from "../../components/SubmitBtn/SubmitBtn";

const ShoppingCart: React.FC = () => {
  return (
    <>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <SubmitButton title="checkout" />
      </ProductList>
    </>
  );
};

export default ShoppingCart;
