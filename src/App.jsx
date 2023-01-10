import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home";
import TypeBeats from "./pages/TypeBeats";
import { Route } from "wouter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/typeBeatsSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Loading></Loading>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/typeBeats" component={TypeBeats} />
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
