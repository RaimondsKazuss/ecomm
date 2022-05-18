import { createContext } from "react";

type CartContextType = {
    cartValue: string | null,
    setCartValue: (id: string) => void
}

const CartContext = createContext<CartContextType>({
    cartValue: null,
    setCartValue: () => {}
})

export default CartContext