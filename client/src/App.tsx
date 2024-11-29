import "./App.css";
import "./components/Header/Header.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="centered">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
