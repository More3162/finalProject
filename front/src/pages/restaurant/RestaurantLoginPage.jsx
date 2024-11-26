import { useState } from "react";
import { restaurantLoginSchema } from "../../validation/restaurant.validation";
import { loginRestaurant } from "../../services/restaurant.service";
import { useAuth } from "../../providers/AuthProvider";

const RestaurantLoginPage = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState(true);
    const { setToken } = useAuth();

    const handleInput = (name) => {
        return (e) => {
            setLoginData((prev) => {
                const loginData = { ...prev, [name]: e.target.value };
                const { error } = restaurantLoginSchema.validate(loginData)
                setError(error ? error.details[0].message : '');
                return loginData;
            });
        };
    };

    const handleLogin = async () => {
        const token = await loginRestaurant(loginData);
        setToken('restaurant ' + token)
    };

    return (
        <form noValidate>

            <div>
                <input type="email" value={loginData.email} onInput={handleInput('email')} placeholder="email" />
            </div>

            <div>
                <input type="password" value={loginData.password} onInput={handleInput('password')} placeholder="password" />
            </div>

            {error && <div>{error}</div>}

            <button type="button" onClick={handleLogin} disabled={!!error}>
                Login
            </button>

        </form>
    );
};

export default RestaurantLoginPage;