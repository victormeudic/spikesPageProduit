import "./App.css";
import LeftPannel from "./components/LeftPannel";
import NavBar from "./components/NavBar";
import RightPanel from "./components/RightPanel";
import { ArticleProvider } from "./context/ArticleContext";

function App() {
  return (
    <ArticleProvider>
      <NavBar />
      <div className="ml-20 flex">
        <LeftPannel />
        <RightPanel />
      </div>
    </ArticleProvider>
  );
}

export default App;
