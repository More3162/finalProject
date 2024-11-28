import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Layout from "./components/layout/Layout";
import RestaurantProvider from "./providers/RestaurantProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <RestaurantProvider>
            <Layout>
              <Router />
            </Layout>
          </RestaurantProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
