import { useContext } from "react";
import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import UserContext from "../../UserContext";

const WishList: React.FC = () => {
  const { value } = useContext(UserContext);

  return (
    <>
      <ProductList>
        <div>{value}</div>
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
