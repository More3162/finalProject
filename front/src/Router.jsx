import { Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import RestaurantLoginPage from "./pages/restaurant/RestaurantLoginPage";
import RestaurantRegisterPage from "./pages/restaurant/RestaurantRegisterPage";

export const ROUTES = {
  root: '/',
  customerLogin: '/customer/login',
  customerRegister: '/customer/register',
  restaurantLogin: '/restaurant/login',
  restaurantRegister: '/restaurant/register'

};

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<div>Hello :D</div>} />
      <Route path={ROUTES.customerLogin} element={<CustomerLoginPage />} />
      <Route path={ROUTES.customerRegister} element={<CustomerRegisterPage />} />
      <Route path={ROUTES.restaurantLogin} element={<RestaurantLoginPage />} />
      <Route path={ROUTES.restaurantRegister} element={<RestaurantRegisterPage />} />
    </Routes>
  );
};