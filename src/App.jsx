// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/ProductDetails";
import { Layout } from "./components/ui/layout";
import AuthProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";

function App() {
   return (
      <AuthProvider>
         <CartProvider>
            <Navbar />
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
               </Routes>
            </Layout>
         </CartProvider>
      </AuthProvider>
   );
}

export default App;
