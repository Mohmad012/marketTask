const BxBtnLine = ({
  handleFunc,
  Class="",
  img,
  Alt="",
  text=""
}) => {

    return (
      <button onClick={handleFunc} className={Class}>
        <img src={img} alt={Alt} />
        {text && text}
      </button>
    );
};

export default BxBtnLine;