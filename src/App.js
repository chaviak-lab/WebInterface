import './App.css';
import MenuComponent from "./components/menu/Menu";
import { Routes, Route } from "react-router-dom";
import BinComponent from "./components/bin-component/bin-component";
import AboutComponent from "./components/about-component/about-component";
import ListComponents from "./components/list-component/list-component";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <MenuComponent />
      </header>
      <Routes>
        <Route path="/bin" element={<BinComponent />} />
        <Route path="about" element={<AboutComponent />} />

        <Route path="/" element={<ListComponents/>} />       
      </Routes>
     
    </section>

  );
}
export default App;
