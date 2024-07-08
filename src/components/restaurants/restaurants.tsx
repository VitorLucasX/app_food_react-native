import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RestaurantItem } from './horizontal/horizontal';

export interface RestaurantsProps {
     id: string;
     name: string;
     image: string;
}

export function Restaurants() {
     const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

     useEffect(() => {
          async function getFoods() {
            const response = await fetch("http://192.168.18.194:3000/restaurants");
            const data = await response.json();
            setRestaurants(data);
          }
          getFoods();
        }, []);

 return (
     <FlatList
     data={restaurants}
     renderItem={ ({ item }) => <RestaurantItem item={item}/>}
     keyExtractor={(item) => item.id}
     horizontal={true}
     contentContainerStyle={{ gap: 14, paddingLeft: 15, paddingRight: 16 }}
     showsHorizontalScrollIndicator={false}
   />
  );
}