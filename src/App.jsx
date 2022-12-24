import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import TypeBeats from "./pages/TypeBeats/TypeBeats";

import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/type-beats" component={TypeBeats} />
      </main>
      <Route path="/sobre-mi" component={Footer}></Route>
    </div>
  );
}

export default App;
