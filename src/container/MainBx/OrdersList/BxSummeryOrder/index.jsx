import BxBtnLine from "../../../../components/BxBtnLine"

const OrdersTotal = ({
  store,
  editItem,
  handleEdit,
  editIco,
  errPriEdit
}) => {

    return (
      <div className="bx-summeryOrder">
        <h3>ملخص الطلبات الواردة</h3>
        {store ? (
          <>
            {!editItem ? (
              <BxBtnLine
                handleFunc={handleEdit}
                Class="edit"
                img={editIco}
                Alt="editIco"
                text="تعديل"
              />
            ) : (
              <div className="bx-save">
                <button onClick={handleEdit} className="save"> حفظ </button>
                <span>{errPriEdit}</span>
              </div>
            )}
          </>
        ): ""}
      </div>
    );
};

export default OrdersTotal;