import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MenuManagement from './pages/MenuManagement';
import OrdersPage from './pages/OrdersPage.jsx';
import RestaurantsPage from './pages/RestaurantsPage.jsx';
const AppRouter = () => {
    return (
        <Router>
            <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <Link to="/">Home</Link> |{' '}
                <Link to="/login">Login/Register</Link> |{' '}
                <Link to="/menu-management">Menu Management</Link> |{' '}
                <Link to="/orders">Orders</Link> |{' '}
                <Link to="/restaurants">Restaurants</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/menu-management" element={<MenuManagement />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/restaurants" element={<RestaurantsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
