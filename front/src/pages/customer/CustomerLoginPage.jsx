import { useState } from 'react';
import { customerLoginSchema } from '../../validation/customer.validation';
import { loginCustomer } from '../../services/customer.service';
import { useAuth } from '../../providers/AuthProvider';

const CustomerLoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState(true);
  const { setToken } = useAuth();

  const handleInput = (name) => {
    return (e) => {
      setLoginData((prev) => {
        const loginData = { ...prev, [name]: e.target.value };
        const { error } = customerLoginSchema.validate(loginData);
        setError(error ? error.details[0].message : '');
        return loginData;
      });
    };
  };

  const handleLogin = async () => {
    const token = await loginCustomer(loginData);
    setToken('customer ' + token);
  };

  return (
    <form noValidate>

      <div>
        <input type="email" value={loginData.email} onInput={handleInput('email')} placeholder="email" />
      </div>

      <div>
        <input type="password" value={loginData.password} onInput={handleInput('password')} placeholder="password" />
      </div>

      {error && <div>{error}</div>}

      <button type="button" onClick={handleLogin} disabled={!!error}>
        Login
      </button>

    </form>
  );
};

export default CustomerLoginPage;
