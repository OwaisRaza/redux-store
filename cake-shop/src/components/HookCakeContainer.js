import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cake with hooks - {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
