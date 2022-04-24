import Logic from "./Logic"
import BxBtnLine from "../../../components/BxBtnLine"
import OrdersAction from "./OrdersAction"
import BxOrdersTitle from "./BxOrdersTitle"
import ItemDetials from "./ItemDetials"
import BxSummeryOrder from "./BxSummeryOrder"
import OrderItemDetials from "./OrdersTotal"
import OrdersNums from "./OrdersNums"

import {
  editIco,
  settings
} from "../../../utiltes/allImgs"

const OrdersList = () => {

  const {
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
  } = Logic()

    return (
      <>
        <div className={`overLay ${active && "active"}`}></div>
        <div className={`bx-OrdersList ${active && "active"}`}>
          <BxBtnLine
            handleFunc={handleOpen}
            Class="bx-btn-line"
            img={settings}
            Alt="settings"
          />
          <BxOrdersTitle />
          <BxSummeryOrder
            store={store}
            editItem={editItem}
            handleEdit={handleEdit}
            editIco={editIco}
            errPriEdit={errPriEdit}
          />
          <div className="order-ItemDetials">
            {cart.length > 0 ? cart.map((item , key) => (
              <ItemDetials
                key={key}
                total={item.total}
                title={item.title}
                img={item.img}
                editItem={editItem}
                editSure={item.editItem}
                id={item.id}
                setPriAftEdit={setPriAftEdit}
                priAftEdit={priAftEdit}
                ID={ID}
                setID={setID}
                editItemDetailes={editItemDetailes}
                errPriEdit={errPriEdit}
                val={val}
                setVal={setVal}
                totalOff={totalOff}
              />
            )) : <p>{errPriEdit ? errPriEdit : "ﻻ يوجد طلبات"}</p>}
          </div>

          <OrdersNums store={store} />
          <hr />
          <OrderItemDetials cartTotal={cartTotal} />
          <div className="orders-OrdersAction">
            <OrdersAction
              Class="green"
              text="قبول الطلبات"
              msg="تم قبول الطلبات"
              handleAction={clearCart}
            />
            <OrdersAction
              Class="red"
              text="رفض الطلبات"
              msg="تم رفض الطلبات"
              handleAction={clearCart}
            />
          </div>
        </div>
      </>
    );
};

export default OrdersList;