import { createContext } from "react";
import { productDataType } from "./components/Product/Product";


type CartContextType = {
    cartValue: productDataType[] | [],
    setCartValue: (product: any) => void
}

const CartContext = createContext<CartContextType>({
    cartValue: [],
    setCartValue: () => []
})

export default CartContext