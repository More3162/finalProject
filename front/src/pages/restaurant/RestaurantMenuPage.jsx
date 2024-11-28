import { useParams } from "react-router-dom";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { ROUTES } from "../../Router";

const RestaurantMenuPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { restaurant, loadRestaurant } = useRestaurant();
  const isOwner = user?.type === 'restaurant' && user._id === restaurant?._id;

  useEffect(() => {
    loadRestaurant(id);
  }, [id]);

  return (
    <>
      <div>
        {isOwner &&
          <a href={ROUTES.restaurantMenuItemForm.replace(':restaurantId', restaurant._id).replace('/:id?', '')}>+</a>
        }
      </div>
      <ul>
        {restaurant?.menu.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenuPage;
