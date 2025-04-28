import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import Men from "./pages/men-page";
import Women from "./pages/women-page";
import Kids from "./pages/kids-page";
import Cart from "./pages/cart-page";
import Login from "./pages/login-page";
import SignUp from "./pages/signup-page";
import ForgetPassword from "./pages/forget-password-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
