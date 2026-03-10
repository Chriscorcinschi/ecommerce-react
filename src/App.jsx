// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

import { Layout } from "./components/ui/layout";
import AuthProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
   return (
      <AuthProvider>
         <Navbar />
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/auth" element={<Auth />} />
               <Route path="/checkout" element={<Checkout />} />
            </Routes>
         </Layout>
      </AuthProvider>
   );
}

export default App;
