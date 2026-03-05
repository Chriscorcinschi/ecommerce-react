import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import { Layout } from "./components/ui/layout";

function App() {
   return (
      <>
         <Navbar />
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/auth" element={<Auth />} />
               <Route path="/chechout" element={<Checkout />} />
            </Routes>
         </Layout>
      </>
   );
}

export default App;
