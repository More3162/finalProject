export const getEmptyRestaurant = () => {
  return {
    name: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    phone: "",
    email: "",
    password: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  };
};

export const normalizeRestaurant = (restaurantData) => {
  return {
    name: restaurantData.name,
    address: {
      country: restaurantData.country,
      city: restaurantData.city,
      street: restaurantData.street,
      houseNumber: restaurantData.houseNumber,
    },
    phone: restaurantData.phone,
    email: restaurantData.email,
    password: restaurantData.password,
    opening_hours: {
      monday: restaurantData.monday,
      tuesday: restaurantData.tuesday,
      wednesday: restaurantData.wednesday,
      thursday: restaurantData.thursday,
      friday: restaurantData.friday,
      saturday: restaurantData.saturday,
      sunday: restaurantData.sunday,
    },
  };
};

export const normalizeMenuItem = (menuItemData) => {
  return {
    name: menuItemData.name,
    category: menuItemData.category,
    price: menuItemData.price,
    description: menuItemData.description,
    imageUrl: menuItemData.imageUrl,
  };
};
