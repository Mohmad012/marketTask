const OrdersAction = ({handleAction , msg, Class , text}) => (
  <button
    onClick={() => handleAction(msg)}
    className={`btn-OrdersAction ${Class}`}
  >
    {text}
  </button>
)

export default OrdersAction;