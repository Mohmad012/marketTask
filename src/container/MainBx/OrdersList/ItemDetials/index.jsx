const ItemDetials = ({
  total,
  title,
  img,
  editItem=false,
  editSure=false,
  id,
  ID,
  setID,
  setPriAftEdit,
  priAftEdit,
  editItemDetailes,
  totalOff,
  val,
  setVal
}) => {

  const handlePrice = e => {
    editItemDetailes(id , e.target.value)
    setPriAftEdit([...priAftEdit , e.target.value])
    setID(id)
    setVal(e.target.value)
  }

  return (
    <div className="bx-itemDetials">
      {editItem ? (
        <div className="bx-edit-num">
          <input className={`edit-num ${val > totalOff[ID] && id === ID && "active"}`} value={total} onChange={handlePrice} />
          <span className="edit-num-cir"></span>
        </div>
      ) : (
        <span className="num">{total}</span>
      )}
      
      <div className="bx-detials">
        <div className="detials">
          <h3>{title}</h3>
          {editSure && <span>تم تعديل الكمية</span>}
        </div>
        <img src={img} alt="itemProd" />
      </div>
    </div>
  );
};

export default ItemDetials;