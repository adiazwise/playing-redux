
import './App.css'
import store from './store';
import Cart from './features/cart/Cart';
import { Provider } from 'react-redux';


function App() {
  
  return (
    <Provider store={store}>
       <Cart  />
    </Provider>
  )
}

export default App;
