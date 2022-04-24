import FeatherIcon from 'feather-icons-react';

const ItemProd = ({
  img,
  title="",
  store=0,
  handleAddItem,
  price=0,
  id,
  alertCircle
}) => {

    return (
      <div className="bx-item">
        <div className="bx-item-up">
          <span className="ico">
            <img src={alertCircle} alt="alertCircle" />
          </span>
          <span className="kal">200 Kcal</span>
        </div>
        <div className="bx-item-med">
          <img src={img} alt="itemProd" />
          <h3>{title}</h3>
          <p className="quantity">
            الكمية بالمخزون:
            <span className="num">{store}</span>
          </p>
        </div>
        <div className="bx-item-down">
          <span className="ico-add">
            <FeatherIcon onClick={() => handleAddItem(id)} icon="plus-circle" />
          </span>
          <span className="price">
            {price}{" "}
            ريال
          </span>
        </div>
      </div>
    );
};

export default ItemProd;