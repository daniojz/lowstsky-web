import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/home";
import SobreMi from "./views/sobre_mi/SobreMi";

import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <header>
        <Route path="/">
          <Navbar showIcon={false}></Navbar>
        </Route>
        <Route path="/sobre-mi">
          <Navbar showIcon={true}></Navbar>
        </Route>
      </header>
      <main>
        <Route path="/" component={Home} />
        <Route path="/sobre-mi" component={SobreMi} />
      </main>
      <Route path="/sobre-mi" component={Footer}></Route>
    </div>
  );
}

export default App;
