import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="backgroundColor">
        <Navbar></Navbar>
      <div className="customWidth mx-auto">
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
