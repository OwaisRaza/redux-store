import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cake simple - {props.numberOfCake}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

const mapDispatchTOProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(CakeContainer);
