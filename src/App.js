import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Cards from './components/Cards';
import Login from "./components/Login"
import { Routes,Route } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import 'animate.css';
function App() {

  
  return (
    <>
<Navbar/>
<Routes>
  <Route path="/" element={<Hero/>}/>
  <Route path="/products" element={<Cards/>}/>
  <Route path="/products/:id" element={<CardsDetails/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
 </>
  );
}

export default App;
