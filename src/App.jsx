import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="backgroundColor">
      <div className="customWidth mx-auto">
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
