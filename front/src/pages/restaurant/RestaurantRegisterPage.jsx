import { useState } from "react";
import { getEmptyRestaurant, normalizeRestaurant } from "../../models/restaurant.model";
import { restaurantRegisterSchema } from "../../validation/restaurant.validation";
import { registerRestaurant } from "../../services/restaurant.service";



const RestaurantRegisterPage = () => {
    const [registerData, setRegisterData] = useState(getEmptyRestaurant());
    const [error, setError] = useState(true);

    const handleInput = (name) => {
        return (e) => {
            setRegisterData((prev) => {
                const registerData = { ...prev, [name]: e.target.value }; // flat data
                const restaurant = normalizeRestaurant(registerData); // inflated data
                const { error } = restaurantRegisterSchema.validate(restaurant);
                setError(error ? error.details[0].message : '');
                return registerData;
            });
        };
    };

    const handleRegister = async () => {
        const restaurant = normalizeRestaurant(registerData);
        const token = await registerRestaurant(restaurant);
        console.log(token);
    };

    return (
        <form noValidate>

            <div>
                <input type="text" value={registerData.name} onInput={handleInput('name')} placeholder="name" />
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
                <input type="text" value={registerData.phone} onInput={handleInput('phone')} placeholder="phone" />
            </div>

            <div>
                <input type="email" value={registerData.email} onInput={handleInput('email')} placeholder="email" />
            </div>

            <div>
                <input type="password" value={registerData.password} onInput={handleInput('password')} placeholder="password" />
            </div>

            <div>
                <input type="text" value={registerData.monday} onInput={handleInput('monday')} placeholder="Opening Hours monday" />
            </div>

            <div>
                <input type="text" value={registerData.tuesday} onInput={handleInput('tuesday')} placeholder="Opening Hours tuesday" />
            </div>

            <div>
                <input type="text" value={registerData.wednesday} onInput={handleInput('wednesday')} placeholder="Opening Hours wednesday" />
            </div>

            <div>
                <input type="text" value={registerData.thursday} onInput={handleInput('thursday')} placeholder="Opening Hours thursday" />
            </div>

            <div>
                <input type="text" value={registerData.friday} onInput={handleInput('friday')} placeholder="Opening Hours  friday" />
            </div>

            <div>
                <input type="text" value={registerData.saturday} onInput={handleInput('saturday')} placeholder="Opening Hours saturday" />
            </div>

            <div>
                <input type="text" value={registerData.sunday} onInput={handleInput('sunday')} placeholder="Opening Hours  sunday" />
            </div>

            {error && <div>{error}</div>}

            <button type="button" onClick={handleRegister} disabled={!!error}>
                Register
            </button>

        </form>

    );
};

export default RestaurantRegisterPage;