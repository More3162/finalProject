import { Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import RestaurantLoginPage from "./pages/restaurant/RestaurantLoginPage";
import RestaurantRegisterPage from "./pages/restaurant/RestaurantRegisterPage";
import HomePage from "./pages/general/HomePage";
import AboutUs from "./pages/general/AboutUs";
import PrivacyPolicy from "./pages/general/PrivacyPolicy";
import Contact from "./pages/general/Contact";
import RestaurantMenuPage from "./pages/restaurant/RestaurantMenuPage";
import RestaurantMenuItemForm from "./pages/restaurant/RestaurantMenuItemForm";
import AllRestaurants from "./pages/restaurant/AllRestaurants";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import PaymentPage from "./pages/checkout/PaymentPage";
import CheckoutSuccessPage from "./pages/checkout/CheckoutSuccessPage";
import DashboardOrderPage from "./pages/orders/DashboardOrders";
import { getToken } from "./services/token.service";
import CustomerDashboard from "./pages/orders/CustomerDashboard";

export const ROUTES = {
  root: "/",
  customerLogin: "/customer/login",
  customerRegister: "/customer/register",
  restaurantLogin: "/restaurant/login",
  restaurantRegister: "/restaurant/register",
  restaurantMenu: "/restaurant/:id/menu",
  restaurantMenuItemForm: "/restaurant/:restaurantId/menu-item/:id?",
  restaurants: "/restaurants",
  menu: "/menu",
  orders: "/orders",
  checkout: "/checkout",
  payment: "/checkout/pay",
  paySuccess: "/checkout/success",
  about: "/about",
  privacy: "/privacy",
  contact: "/contact",
};

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<HomePage />} />
      <Route path={ROUTES.customerLogin} element={<CustomerLoginPage />} />
      <Route
        path={ROUTES.customerRegister}
        element={<CustomerRegisterPage />}
      />
      <Route path={ROUTES.restaurantLogin} element={<RestaurantLoginPage />} />
      <Route
        path={ROUTES.restaurantRegister}
        element={<RestaurantRegisterPage />}
      />
      <Route path={ROUTES.restaurantMenu} element={<RestaurantMenuPage />} />
      <Route
        path={ROUTES.restaurantMenuItemForm}
        element={<RestaurantMenuItemForm />}
      />
      <Route path={ROUTES.restaurants} element={<AllRestaurants />} />
      <Route path={ROUTES.checkout} element={<CheckoutPage />} />
      <Route path={ROUTES.payment} element={<PaymentPage />} />
      <Route path={ROUTES.paySuccess} element={<CheckoutSuccessPage />} />
      <Route
        path={ROUTES.orders}
        element={
          getToken()?.split(" ")[0] === "restaurant" ? (
            <DashboardOrderPage />
          ) : (
            <CustomerDashboard />
          )
        }
      />
      <Route path={ROUTES.menu} element={<RestaurantMenuPage />} />
      <Route path={ROUTES.about} element={<AboutUs />} />
      <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
      <Route path={ROUTES.contact} element={<Contact />} />
    </Routes>
  );
}
