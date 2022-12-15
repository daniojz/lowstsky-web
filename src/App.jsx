import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/home";
import SobreMi from "./views/SobreMi/SobreMi";
import { Route } from "wouter";
import TypeBeats from "./views/EditTypeBeats/EditTypeBeats";
import {createStore} from "redux"
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension" 

const initialValue = {
  beats: [
    {title: "hola1", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola2", price: "5", photoUrl: "asdfasdf.com"},
    {title: "hola3", price: "9", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"}
  ]
}

const rootReducer = (state = initialValue, action) => {
  switch(action.type) {
    case 'ADD_BEAT':
      return {...state, beats: [...state.beats, action.payload]}
    default:
      return state;
  }
}
const store = createStore(rootReducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/edit-type-beats" component={TypeBeats} />
        </main>
        <Route path="/sobre-mi" component={Footer}></Route>
      </div>
    </Provider>
  );
}

export default App;
