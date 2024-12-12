import { getEmptyContact, normalizeContact } from "./contact.model";

export const getEmptyCustomer = () => {
  return { ...getEmptyContact(), password: '' };
};

export const normalizeCustomer = (customerData) => {
  return { ...normalizeContact(customerData), password: customerData.password };
};
