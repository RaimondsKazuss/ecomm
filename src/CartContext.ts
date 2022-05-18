import { createContext } from "react";
import { productDataType } from "./components/Product/Product";


type CartContextType = {
    cartValue: productDataType | null,
    setCartValue: (product: productDataType) => void
}

const CartContext = createContext<CartContextType>({
    cartValue: null,
    setCartValue: () => {}
})

export default CartContext