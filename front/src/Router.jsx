import { Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import RestaurantLoginPage from "./pages/restaurant/RestaurantLoginPage";
import RestaurantRegisterPage from "./pages/restaurant/RestaurantRegisterPage";
import HomePage from "./pages/general/HomePage";
import AboutUs from "./pages/general/AboutUs";
import PrivacyPolicy from "./pages/general/PrivacyPolicy";
import Contact from "./pages/general/Contact";
import Layout from "./providers/Layout"; // Import Layout

export const ROUTES = {
  root: "/",
  customerLogin: "/customer/login",
  customerRegister: "/customer/register",
  restaurantLogin: "/restaurant/login",
  restaurantRegister: "/restaurant/register",
  about: "/about",
  privacy: "/privacy",
  contact: "/contact",
};

export default function Router({ isDarkMode, toggleDarkMode, userType }) {
  return (
    <Routes>
      <Route
        path={ROUTES.root}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.customerLogin}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <CustomerLoginPage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.customerRegister}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <CustomerRegisterPage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.restaurantLogin}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <RestaurantLoginPage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.restaurantRegister}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <RestaurantRegisterPage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.about}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path={ROUTES.privacy}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path={ROUTES.contact}
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} userType={userType}>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}
