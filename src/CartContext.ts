import { createContext } from "react";

type CartContextType = {
    cartValue: number | null,
    setCartValue: (id: number) => void
}

const CartContext = createContext<CartContextType>({
    cartValue: null,
    setCartValue: () => {}
})

export default CartContext