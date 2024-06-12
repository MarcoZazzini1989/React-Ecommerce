import { IoMdStar } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";

function Card() {
  return (
    <>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoes</h3>
          <section className="card-reviews">
            <IoMdStar className="rating-star" />
            <IoMdStar className="rating-star" />
            <IoMdStar className="rating-star" />
            <IoMdStar className="rating-star" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>$200
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      ;
    </>
  );
}

export default Card;
