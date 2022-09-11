import reactLogo from "./assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./components";
import { MainMenu } from "./Pages";
// eslint-disable-next-line no-unused-vars
function App(props) {
  return (
    <div className="bg-white w-full h-full  grow-1">
      <MainMenu></MainMenu>
    </div>
  );
}

// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-undef
export default App;
