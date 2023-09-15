import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
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
    <Router>
      <Provider store={store}>
        <div className='App'>
          <header>
            <NavMenu></NavMenu>
          </header>
          <main>
            <Loading></Loading>
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
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      </Provider>
    </Router>
  )
}

export default App
