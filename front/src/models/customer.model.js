export const getEmptyCustomer = () => {
  return {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    phone_number: ''
  };
};

export const normalizeCustomer = (customerData) => {
  return {
    first_name: customerData.first_name,
    last_name: customerData.last_name,
    email: customerData.email,
    password: customerData.password,
    address: {
      country: customerData.country,
      city: customerData.city,
      street: customerData.street,
      houseNumber: customerData.houseNumber
    },
    phone_number: customerData.phone_number
  };
};
