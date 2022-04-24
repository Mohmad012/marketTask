import { useContext } from "react"
import SearchBx from "../SearchBx"
import ItemProd from "./ItemProd"
import {ProductContext} from "../../../context/context"
import {alertCircle} from "../../../utiltes/allImgs"


const ListItems = () => {

  const {incr , allData , searchItem} = useContext(ProductContext)

    return (
      <div className="bx-ListItems">
        <div className="sec-SearchBx">
          <SearchBx searchItem={searchItem} />
        </div>
        <div className="bx-ItemProd">
          {allData?.map((item , key) => (
            <ItemProd
              key={key}
              img={item.img}
              title={item.title}
              store={item.store}
              price={item.price}
              id={item.id}
              handleAddItem={incr}
              alertCircle={alertCircle}
            />
          ))}
        </div>
      </div>
    );
};

export default ListItems;