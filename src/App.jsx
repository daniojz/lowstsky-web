import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Loading from './components/Loading/Loading'
import Home from './pages/Home'
import TypeBeats from './pages/TypeBeats'
import AddTypeBeat from './pages/TypeBeats/pages/AddTypeBeat'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Loading></Loading>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/typeBeats' element={<TypeBeats />} />
              <Route
                exact
                path='/typeBeats/addTypeBeat'
                element={<AddTypeBeat />}
              />
            </Routes>
          </Router>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Provider>
  )
}

export default App
