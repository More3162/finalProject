export const getEmptyRestaurant = () => {
    return {
        name: '',
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        phone_number: '',
        email: '',
        password: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
    };
};

export const normalizeRestaurant = (RestaurantData) => {
    return {
        name: RestaurantData.name,
        address: {
            country: RestaurantData.country,
            city: RestaurantData.city,
            street: RestaurantData.street,
            houseNumber: RestaurantData.houseNumber
        },
        phone: RestaurantData.phone,
        email: RestaurantData.email,
        password: RestaurantData.password,
        opening_hours: {
            monday: RestaurantData.monday,
            tuesday: RestaurantData.tuesday,
            wednesday: RestaurantData.wednesday,
            thursday: RestaurantData.thursday,
            friday: RestaurantData.friday,
            saturday: RestaurantData.saturday,
            sunday: RestaurantData.sunday
        },
    };
};
