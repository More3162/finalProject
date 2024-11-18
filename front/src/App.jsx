import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import CustomerDashboard from './components/CustomerDashboard';
import RestaurantDashboard from './components/RestaurantDashboard';

const App = () => {
  const [page, setPage] = useState('auth');
  const [authType, setAuthType] = useState('login');

  const renderPage = () => {
    switch (page) {
      case 'customer':
        return <CustomerDashboard />;
      case 'restaurant':
        return <RestaurantDashboard />;
      default:
        return (
          <AuthForm
            type={authType}
            onSwitch={() => setAuthType(authType === 'login' ? 'register' : 'login')}
          />
        );
    }
  };

  return renderPage();
};

export default App;
