import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Names } from "../pages/Names/Names";
import { Password } from "../pages/Register/Password";
import { LandingPage } from "../pages/Home/LandingPage/LandingPage";
import ProtectedRoutes from "./privateRoutes";
import ErrorBoundary from "../components/ErrorBoundary";
import Bookings from "../pages/Bookings/bookings";
import AboutUs from "../pages/AboutUS/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorBoundary/>}>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />}>
        <Route index element={<Password />} />
      </Route>
      <Route path="aboutus" element={<AboutUs />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="names" element={<Names />} />
        <Route path="slotbooking" element={<Bookings/>} />
      </Route>
      <Route errorElement={<Home />}/>
    </Route>
  )
);

export default router;
