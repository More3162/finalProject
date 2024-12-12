import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Layout from "./components/layout/Layout";
import RestaurantProvider from "./providers/RestaurantProvider";
import OrderProvider from "./providers/OrderProvider";
import CartProvider from "./providers/CartProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <RestaurantProvider>
            <OrderProvider>
              <CartProvider>
                <Layout>
                  <Router />
                </Layout>
              </CartProvider>
            </OrderProvider>
          </RestaurantProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
