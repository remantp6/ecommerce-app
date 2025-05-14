import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import Men from "./pages/men-page";
import Women from "./pages/women-page";
import Kids from "./pages/kids-page";
import Cart from "./pages/cart-page";
import Login from "./pages/login-page";
import SignUp from "./pages/signup-page";
import ForgetPassword from "./pages/forget-password-page";
import VerifyEmail from "./pages/email-verify";
import AddPassword from "./pages/add-password-page";
import OtpPage from "./pages/otp-page";
import PasswordCreatePage from "./pages/password-create-page";

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
        <Route path="/otp-request" element={<OtpPage />} />
        <Route path="/password-create" element={<PasswordCreatePage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/add-password" element={<AddPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
