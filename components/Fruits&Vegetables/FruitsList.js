import React from "react";
import FruitsItem from "./FruitsItem";
import { useSelector } from "react-redux";
const FRUITS_AND_VEGETABLES = [
  {
    id: "1",
    image: "/Fruits&Vegetables_Photos/lemons.jpg",
    name: "Lemons",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "2",
    image: "/Fruits&Vegetables_Photos/Bananas.jpg",
    name: "Bananas",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "3",
    image: "/Fruits&Vegetables_Photos/Gurken.jpg",
    name: "Gurken",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "4",
    image: "/Fruits&Vegetables_Photos/Pomegranate.jpg",
    name: "Pomegrante",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "5",
    image: "/Fruits&Vegetables_Photos/cherries.jpg",
    name: "Cherries",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "6",
    image: "/Fruits&Vegetables_Photos/Avocado.jpg",
    name: "Avocado",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "7",
    image: "/Fruits&Vegetables_Photos/Blackberries.jpg",
    name: "Blackberries",
    quantity: 1,
    measure: "kilo",
  },
  {
    id: "8",
    image: "/Fruits&Vegetables_Photos/Tomatoes.png",
    name: "Tomatoes",
    quantity: 1,
    measure: "kilo",
  },
];

function FruitsList() {
  const lists = useSelector((state) => state.list.lists);

  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar min-h-[500px]  max-h-[730px]">
      {FRUITS_AND_VEGETABLES.map((f) => (
        <FruitsItem
          key={f.id}
          id={f.id}
          image={f.image}
          name={f.name}
          quantity={f.quantity}
          measure={f.measure}
          lists={lists}
        />
      ))}
    </div>
  );
}

export default FruitsList;
