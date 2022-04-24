import { useState, useCallback , useContext } from "react"
import {ProductContext} from "../../../context/context"

let useLogic = () => {
    const {
        cart,
        cartTotal,
        store,
        errPriEdit,
        clearCart,
        editItemDetailes,
        totalOff
    } = useContext(ProductContext)

    const [active , setActive] = useState(false)
    const [editItem , setEditItem] = useState(false)
    const [priAftEdit , setPriAftEdit] = useState([])
    const [ID , setID] = useState([])
    const [val , setVal] = useState(0)


    const handleOpen = useCallback(() => setActive(!active) , [active])

    const handleEdit = useCallback(() => setEditItem(!editItem) , [editItem])

    return{
        cart,
        cartTotal,
        store,
        errPriEdit,
        clearCart,
        editItemDetailes,
        totalOff,
        active,
        editItem,
        priAftEdit,
        setPriAftEdit,
        ID,
        setID,
        val,
        setVal,
        handleOpen,
        handleEdit
    }
}

export default useLogic