import alertCircle from "../../../assets/imgs/search.svg"
// import FeatherIcon from 'feather-icons-react';
// import imgJose from "../../assets/imgs/jose.PNG"


const SearchBx = ({searchItem}) => {

    const handleSearchItem = e => searchItem(e.target.value)

    return (
      <div className="bx-SearchBx">
        <div className="sec-SearchBx">
          <input type="text" className="Search" onInput={handleSearchItem} />
          <img src={alertCircle} alt="alertCircle" />
        </div>
      </div>
    );
};

export default SearchBx;