const Restaurant = {
    "name": "dixie",
    "address": {
        "country": "Israel",
        "city": "Tel Aviv",
        "street": "Yigal Alon",
        "houseNumber": 120
    },
    "phone": "050-0000000",
    "email": "test@test.com",
     { email: 'rasd@asd.asd', password: 'Asd123!' }
"password": "Abc1234!",
    "opening_hours": {
    "monday": "24/7",
        "tuesday": "24/7",
            "wednesday": "24/7",
                "thursday": "24/7",
                    "friday": "24/7",
                        "saturday": "24/7",
                            "sunday": "24/7"
}
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjU0Y2E4ZGE3ODFiMzg5NzM5ZmZhNSIsImlhdCI6MTcyOTU4OTA5OSwiZXhwIjoxNzI5NTkyNjk5fQ.5bm7Vn6gLC0QzSSHkEMnc9a8Q1_jwbgrEKAIBNIS-1g"
}


const Items = [
    {
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "name": "Hamburger",
        "category": "Main",
        "price": 85,
        "description": "A delicious beef hamburger, served with fresh vegetables and a special house sauce.",
        "is_available": true
    },
    {
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "name": "Caesar Salad",
        "category": "Starters",
        "price": 45,
        "description": "A fresh Caesar salad with crispy croutons, Parmesan cheese, and a creamy Caesar dressing.",
        "is_available": true
    },
    {
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "name": "Grilled Salmon",
        "category": "Main",
        "price": 110,
        "description": "Perfectly grilled salmon fillet, served with a side of roasted vegetables and lemon butter sauce.",
        "is_available": true
    },
    {
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "name": "Chocolate Lava Cake",
        "category": "Dessert",
        "price": 38,
        "description": "Warm chocolate cake with a molten center, served with vanilla ice cream.",
        "is_available": true
    }
]

const Customers = [
    {
        "first_name": "Mor",
        "last_name": "Rachmani",
        "email": "mor@test.com",
        "password": "Mor123!",
        "address": {
            "country": "Israel",
            "city": "Tel Aviv",
            "street": "Arlozerov",
            "houseNumber": "11",
        },
        "phone_number": "050-9455553"
    },
    {
        "first_name": "Ben",
        "last_name": "Or",
        "email": "ben@test.com",
        "password": "Ben123!",
        "address": {
            "country": "Israel",
            "city": "Tel Aviv",
            "street": "HaRrbaa",
            "houseNumber": "32"
        },
        "phone_number": "050-9422223"
    },
]


const orders = [
    {
        "customer_id": "67024afa4b0a16445d892df0",
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "items": [
            {
                "menuItem_id": "67022fa0064a8d7ee2c2655f",
                "quantity": 1
            },
            {
                "menuItem_id": "6702419bc545aff4320316bd",
                "quantity": 1
            }
        ]
    },
    {
        "customer_id": "67024bdf91bc84c15b9edde9",
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "items": [
            {
                "menuItem_id": "67022fa0064a8d7ee2c2655f",
                "quantity": 2
            },
            {
                "menuItem_id": "670241e3c545aff4320316c2",
                "quantity": 1
            }
        ]
    },
    {
        "customer_id": "67024bdf91bc84c15b9edde9",
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "items": [
            {
                "menuItem_id": "6702419bc545aff4320316bd",
                "quantity": 2
            },
            {
                "menuItem_id": "670241e3c545aff4320316c2",
                "quantity": 5
            },
            {
                "menuItem_id": "67022fa0064a8d7ee2c2655f",
                "quantity": 2
            }
        ]
    },
    {
        "customer_id": "67024afa4b0a16445d892df0",
        "restaurant_id": "66f54ca8da781b389739ffa5",
        "items": [
            {
                "menuItem_id": "67022fa0064a8d7ee2c2655f",
                "quantity": 2
            },
            {
                "menuItem_id": "6702419bc545aff4320316bd",
                "quantity": 4
            },
            {
                "menuItem_id": "670241c5c545aff4320316bf",
                "quantity": 3
            },
            {
                "menuItem_id": "670241e3c545aff4320316c2",
                "quantity": 7
            }
        ]
    }
]