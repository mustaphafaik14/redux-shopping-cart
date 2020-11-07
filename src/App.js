import React from 'react' 
import ProductItems from './product-items'
//Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';

//redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducer.js'
import ProductContainer from './components/ProductContainer';
import Sidebar from './components/Sidebar';

const initState={
  products:ProductItems,
  cart:localStorage.getItem('cartItemsRedux') ? JSON.parse(localStorage.getItem('cartItemsRedux')) : [],
  total:0,
  amount:0,
  sidebarIsOpen:false
}

 

const store=createStore(reducer,initState)


function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <Navbar />
      <Banner title="The Shop" />
      <ProductContainer />
    </Provider>
  );
}

export default App;
