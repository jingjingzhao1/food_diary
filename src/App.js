import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/homePage/Home';
import Dish from './pages/dishPage/Dish';
import Error from './pages/errorPage/Error';
import ListByCategory from './pages/categoryPage/ListByCategory';
import Cart from './pages/cartPage/Cart';

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Sidebar/>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/meal/category/:title" element ={<ListByCategory />}/>
      <Route path = "/dish/:id" element ={<Dish />}/>
      <Route path = "/cart" element ={<Cart />}/>
      <Route path = "*" element ={<Error />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
