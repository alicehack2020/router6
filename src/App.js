import './App.css';
import NabBar from "./components/NabBar"
import { Routes,Route} from "react-router-dom";
import HOME from "./components/Home"
import Products from "./components/Products"
import Productdetails from "./components/Productdetails"
import NotFound from "./components/NotFound"
function App() {
  return (
// Home - /
// All Products - /products
// Productdetails - /products/:id
<>
<NabBar></NabBar>
<Routes>
  <Route path={"/"} element={<HOME></HOME>}></Route>
  <Route path={"/products"} element={<Products></Products>}></Route>
  <Route path={"*"} element={<NotFound></NotFound>}></Route>
  <Route path={"/products/:id"} element={<Productdetails></Productdetails>}></Route>
</Routes>

</>

  );
}

export default App;
