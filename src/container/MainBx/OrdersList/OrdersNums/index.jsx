const OrdersNums = ({store}) => {

    return (
      <div className="orders-nums">
        <h3>عدد الطلبات</h3>
        <span>
          {store}
        </span>
      </div>
    );
};

export default OrdersNums;