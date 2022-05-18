import { createContext } from "react";

type UserContextType = {
    value: string | null,
    setValue: (name: string) => void
}

const UserContext = createContext<UserContextType>({
    value: null,
    setValue: () => {}
})

export default UserContext