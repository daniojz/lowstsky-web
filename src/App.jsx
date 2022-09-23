import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
