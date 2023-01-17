import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  // v6
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" replace element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );

  // v5
  // return (
  //   <div>
  //     <MainHeader />
  //     <main>
  //       <Switch>
  //         <Route path="/" exact>
  //           <Redirect to="/welcome" />
  //         </Route>
  //         <Route path="/welcome">
  //           <Welcome />
  //         </Route>
  //         <Route path="/products" exact>
  //           <Products />
  //         </Route>
  //         <Route path="/products/:productId">
  //           <ProductDetail />
  //         </Route>
  //       </Switch>
  //     </main>
  //   </div>
  // );
}

export default App;
