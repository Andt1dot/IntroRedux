import "./App.css";
import Home from "./pages/Home";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { homeReducer} from "./reducers/homeReducer";
import { meteoReducer} from "./reducers/meteoReducer";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Meteo from "./pages/Meteo";
import Exchange from './pages/Exchange'
import { combineReducers } from 'redux';


const reduser = combineReducers({
  homeReducer,
  meteoReducer
});


const store = createStore(reduser, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <nav className="nav">
            <li>
              <Link to="/home">HomePage</Link>
            </li>
            <li>
              <Link to="/meteo">Meteo</Link>
            </li>
            <li>
              <Link to="/exchange">Exchange</Link>
            </li>
          </nav>
          <Switch>

            <Route exact path="/meteo">
            <Meteo />
            </Route>
            
            <Route path = '/exchange'>
            <Exchange/>
            </Route>

            <Route path="/">
              <Home />
            </Route>
          
          </Switch>
          <h1>SAlut</h1>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
