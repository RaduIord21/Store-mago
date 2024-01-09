import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Components/navbar";
import {Cart} from "./Pages/Cart/cart";
import {Shop} from "./Pages/Shop/shop";
import {Checkout} from "./Pages/Checkout/checkout"; 
import { ShopContextProvider } from './Context/shop-context';
import {Login } from './Pages/Login/login';
import {PostList} from './Components/PostList';
import {Postdata} from './Components/Post'


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>     
            <Route path="/" element={<Shop />}/>
            <Route path="/postdata" element={<Postdata />}/>        
            <Route path="/postlist" element={<PostList />}/>   
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;