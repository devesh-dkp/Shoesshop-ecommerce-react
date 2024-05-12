import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice ,url}) => {
  // write function whch redirects to website
  const redirect = (url) => {
    return () => {
      if(url===undefined || url===""){
        url="https://www.amazon.in/"
      }
      window.open(url, "_blank");
    };
  };
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" onClick={redirect(url)} />
        <div className="card-details">
          <h3 className="card-title" onClick={redirect(url)}>{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" onClick={redirect(url)} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
