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

export const ROUTES = {
  root: "/",
  customerLogin: "/customer/login",
  customerRegister: "/customer/register",
  restaurantLogin: "/restaurant/login",
  restaurantRegister: "/restaurant/register",
  restaurantMenu: "/restaurant/:id/menu",
  restaurantMenuItemForm: "/restaurant/:restaurantId/menu-item/:id?",
  about: "/about",
  privacy: "/privacy",
  contact: "/contact",
  restaurants: "/ restaurants",
};

export default function Router() {
  return (
    <Routes>
      <Route
        path={ROUTES.root}
        element={<HomePage />}
      />
      <Route
        path={ROUTES.customerLogin}
        element={<CustomerLoginPage />}
      />
      <Route
        path={ROUTES.customerRegister}
        element={<CustomerRegisterPage />}
      />
      <Route
        path={ROUTES.restaurantLogin}
        element={<RestaurantLoginPage />}
      />
      <Route
        path={ROUTES.restaurantRegister}
        element={<RestaurantRegisterPage />}
      />
      <Route
        path={ROUTES.restaurantMenu}
        element={<RestaurantMenuPage />}
      />
      <Route
        path={ROUTES.restaurantMenuItemForm}
        element={<RestaurantMenuItemForm />}
      />
      <Route
        path={ROUTES.about}
        element={<AboutUs />}
      />
      <Route
        path={ROUTES.privacy}
        element={<PrivacyPolicy />}
      />
      <Route
        path={ROUTES.contact}
        element={<Contact />}
      />
    </Routes>
  );
}
