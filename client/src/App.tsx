import "./App.css";
import "./components/Header.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
