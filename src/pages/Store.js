import { connect } from "react-redux";
import StoreItem from "../components/StoreItem";

const Store = (props) => {
  return (
    <div className="storeCont">
      {props.catalog.map((i, k) => (
        <StoreItem key={k} title={i.title} src={i.src} />
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
