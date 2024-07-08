// components/trending/trending.js
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food/food';

export interface FoodsProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restauranteId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodsProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.18.194:3000/foods");
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList 
      data={foods}
      renderItem={ ({ item }) => <CardHorizontalFood food={item}/>}
      keyExtractor={(item) => item.id}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 15, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
