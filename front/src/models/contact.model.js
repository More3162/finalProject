export const getEmptyContact = () => {
  return {
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    phone_number: ''
  };
};

export const contactFormData = (contact) => {
  return contact && {
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    phone_number: contact.phone_number,
    ...contact.address
  };
};

export const normalizeContact = (contactData) => {
  return {
    first_name: contactData.first_name,
    last_name: contactData.last_name,
    email: contactData.email,
    address: {
      country: contactData.country,
      city: contactData.city,
      street: contactData.street,
      houseNumber: contactData.houseNumber
    },
    phone_number: contactData.phone_number
  };
};