import { connect } from "react-redux";
import CatalogItem from "../components/CatalogItem";

const Store = (props) => {
  return (
    <div className="storeCont">
      {props.catalog.map((i, k) => (
        <CatalogItem
          key={k}
          id={i.id}
          title={i.title}
          src={i.src}
          price={i.price}
          desc={i.desc}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catalog: state.catalog,
  };
};

export default connect(mapStateToProps)(Store);
