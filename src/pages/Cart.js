import { connect } from "react-redux";
import CatalogItem from "../components/CatalogItem";

const Cart = (props) => {
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedTotal = numberWithCommas(props.total);

  return (
    <div className="cartCont">
      <div style={{ width: "100%" }}>
        {props.total > 0 ? (
          <h2 style={{ fontSize: "30px", margin: "5px" }}>
            Total: ${formattedTotal}
          </h2>
        ) : (
          <h2 style={{ fontSize: "30px", margin: "5px" }}>
            Your cart is empty
          </h2>
        )}
      </div>

      {props.cart.map((i, k) => (
        <CatalogItem
          key={k}
          id={i.id}
          type="cart"
          title={i.title}
          src={i.src}
          price={i.price}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.itemsInCart,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Cart);
