import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load all pages
const Home = lazy(() => import("./pages/home-page"));
const Men = lazy(() => import("./pages/men-page"));
const Women = lazy(() => import("./pages/women-page"));
const Kids = lazy(() => import("./pages/kids-page"));
const Cart = lazy(() => import("./pages/cart-page"));
const Login = lazy(() => import("./pages/login-page"));
const SignUp = lazy(() => import("./pages/signup-page"));
const ForgetPassword = lazy(() => import("./pages/forget-password-page"));
const VerifyEmail = lazy(() => import("./pages/email-verify"));
const AddPassword = lazy(() => import("./pages/add-password-page"));
const OtpPage = lazy(() => import("./pages/otp-page"));
const PasswordCreatePage = lazy(() => import("./pages/password-create-page"));
const LoaderScreen = lazy(() => import("./components/LoaderScreen"));
const NoMatch = lazy(() => import("./pages/no-match-page"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <LoaderScreen/>
        }
      >
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
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
