import "./App.css";
import LeftPannel from "./components/LeftPannel";
import NavBar from "./components/NavBar";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <>
      <NavBar />
      <div className="ml-20 flex">
        <LeftPannel />
        <RightPanel />
      </div>
    </>
  );
}

export default App;
