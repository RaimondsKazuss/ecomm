import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";

const WishList: React.FC = () => {
  return (
    <>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </>
  );
};

export default WishList;
