const CONTACT_KEY = 'contact';

export const getStoredContact = () => {
    const contact = JSON.parse(localStorage.getItem(CONTACT_KEY));
    return contact;
};

export const setStoredContact = (contact) => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contact));
};
