import { useState } from 'react';
import { customerRegisterSchema } from '../../validation/customer.validation';
import { registerCustomer } from '../../services/customer.service';
import { getEmptyCustomer, normalizeCustomer } from '../../models/customer.model';

const CustomerRegisterPage = () => {
  const [registerData, setRegisterData] = useState(getEmptyCustomer());
  const [error, setError] = useState(true);

  const handleInput = (name) => {
    return (e) => {
      setRegisterData((prev) => {
        const registerData = { ...prev, [name]: e.target.value }; // flat data
        const customer = normalizeCustomer(registerData); // inflated data
        const { error } = customerRegisterSchema.validate(customer);
        setError(error ? error.details[0].message : '');
        return registerData;
      });
    };
  };

  const handleRegister = async () => {
    const customer = normalizeCustomer(registerData);
    const token = await registerCustomer(customer);
    console.log(token);
  };

  return (
    <form noValidate>

      <div>
        <input type="text" value={registerData.first_name} onInput={handleInput('first_name')} placeholder="first name" />
      </div>

      <div>
        <input type="text" value={registerData.last_name} onInput={handleInput('last_name')} placeholder="last name" />
      </div>

      <div>
        <input type="email" value={registerData.email} onInput={handleInput('email')} placeholder="email" />
      </div>

      <div>
        <input type="password" value={registerData.password} onInput={handleInput('password')} placeholder="password" />
      </div>

      <div>
        <input type="text" value={registerData.country} onInput={handleInput('country')} placeholder="country" />
      </div>

      <div>
        <input type="text" value={registerData.city} onInput={handleInput('city')} placeholder="city" />
      </div>

      <div>
        <input type="text" value={registerData.street} onInput={handleInput('street')} placeholder="street" />
      </div>

      <div>
        <input type="number" value={registerData.houseNumber} onInput={handleInput('houseNumber')} placeholder="house number" />
      </div>

      <div>
        <input type="text" value={registerData.phone_number} onInput={handleInput('phone_number')} placeholder="phone" />
      </div>

      {error && <div>{error}</div>}

      <button type="button" onClick={handleRegister} disabled={!!error}>
        Register
      </button>

    </form>
  );
};

export default CustomerRegisterPage;
