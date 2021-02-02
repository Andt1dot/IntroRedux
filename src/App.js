import './App.css';
import Home from './pages/Home'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {homeReducer} from './reducers/homeReducer'
import Header from './components/Header'
import thunk from 'redux-thunk'

const store = createStore(homeReducer,applyMiddleware(thunk)); 

function App() {
  return (
    <div className="App">
    <Provider store = {store}>
    <Header/>
    <Home/>      
    </Provider>
    </div>
  );
}

export default App;
