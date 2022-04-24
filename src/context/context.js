import {useEffect , useState , createContext} from "react";
import data from "../data/data.js";
const ProductContext = createContext();

const ProductProvider = (props) =>  {

  const [cart , setCart] = useState([])
  const [cartTotal , setCartTotal] = useState(0)
  const [storeNum , setStoreNum] = useState(0)
  const [errPriEdit , setErrPriEdit] = useState("")
  const [allD , setAllD] = useState(data)
  const [totalOff , setTotalOff] = useState({})

  useEffect(() => {
    addTotals()
  },[cart])

  const Inc = id => {
    
    let tempAllD = [...allD];
    const selectedProduct = tempAllD.find(item => {
      return item.id === id;
    });
    const index = tempAllD.indexOf(selectedProduct);
    const product = tempAllD[index];
    if(product.store === 0) return;
    product.store = product.store - 1;
    product.numItem = product.numItem + 1;
    product.total = product.price * product.numItem;
    let newCart = new Set([...cart , product])
    setAllD([...tempAllD])
    setCart([...newCart])
    setErrPriEdit("")

  }

  const editItemDetailes = (id , val) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    const newTotalOff = product.store * product.price
    const TotalOffwithID = {}
    TotalOffwithID[id] = newTotalOff
    setTotalOff({...totalOff , ...TotalOffwithID})
    if(val > newTotalOff){
      return setErrPriEdit("يوجد كمية اكثر من المخزون")
    }else{
      product.total = val;
      product.editItem = true;
      setCart([...tempCart])
      return setErrPriEdit(" ")
    };
  }

  const searchItem = (text) => {
    let tempAllD = [...allD];
    const selectedProduct = tempAllD.filter(item => item.title.includes(text));
    text.length > 0 ? setAllD([...selectedProduct]) : setAllD([...data])
  }

  const getTotals = () => {
    let total = cart?.reduce((curr , item) => (curr += parseInt(item.total)) ,0);
    return {
      total
    };
  };
  const addTotals = () => {
    const {total} = getTotals();
    setCartTotal(total)
    setStoreNum(cart?.length)
  };

  const clearCart = (text) => {
    if(cart.length > 0){
      setErrPriEdit(text);
      setCart([])
      setTotalOff({})
    }
  };
    return (
      <ProductContext.Provider
        value={{
          cart,
          cartTotal,
          clearCart,
          store:storeNum,
          incr:Inc,
          allData:allD,
          editItemDetailes,
          errPriEdit,
          searchItem,
          totalOff
        }}
      >
        {props.children}
      </ProductContext.Provider>
    );
}

export { ProductProvider , ProductContext };