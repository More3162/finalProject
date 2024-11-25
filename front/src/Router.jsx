import { Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";

export const ROUTES = {
  root: '/',
  customerLogin: '/customer/login',
  customerRegister: '/customer/register'
};

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<div>Hello :D</div>} />
      <Route path={ROUTES.customerLogin} element={<CustomerLoginPage />} />
      <Route path={ROUTES.customerRegister} element={<CustomerRegisterPage />} />
    </Routes>
  );
};
