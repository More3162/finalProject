export const getEmptyRestaurant = () => {
    return {
        name: 'asd',
        country: 'asd',
        city: 'asd',
        street: 'asd',
        houseNumber: '1',
        phone: '012345678',
        email: '',
        password: 'Abcd1234!',
        monday: '12',
        tuesday: '12',
        wednesday: '12',
        thursday: '12',
        friday: '12',
        saturday: '12',
        sunday: '12'
    };
};

export const normalizeRestaurant = (restaurantData) => {
    return {
        name: restaurantData.name,
        address: {
            country: restaurantData.country,
            city: restaurantData.city,
            street: restaurantData.street,
            houseNumber: restaurantData.houseNumber
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
            sunday: restaurantData.sunday
        },
    };
};

export const normalizeMenuItem = (menuItemData) => {
    return {
        name: menuItemData.name,
        category: menuItemData.category,
        price: menuItemData.price,
        description: menuItemData.description
    };
};
