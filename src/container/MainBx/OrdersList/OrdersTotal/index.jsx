const OrderItemDetials = ({cartTotal}) => {

    return (
      <div className="orders-total">
        <h3>المجموع</h3>
        <span className="price">
          {cartTotal ? cartTotal : 0}
          <span className="currency">
            ريال
          </span>
        </span>
      </div>
    );
};

export default OrderItemDetials;