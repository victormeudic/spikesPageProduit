import "./App.css";
import LeftPannel from "./components/LeftPannel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="ml-20">
        <LeftPannel />
      </div>
    </>
  );
}

export default App;
