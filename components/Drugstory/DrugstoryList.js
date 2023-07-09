import React from "react";
import { useSelector } from "react-redux";

import DrugstoryItem from "./DrugstoryItem";
const DRUGSTORY_DATA = [
  {
    id: "1",
    image: "/Drugstory_photos/Feuchttücher babylove.jpg",
    name: "babylove",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "2",
    image: "/Drugstory_photos/Foundation.jpg",
    name: "Foundation",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "3",
    image: "/Drugstory_photos/Hair Gel.jpg",
    name: "Hair Gel",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "4",
    image: "/Drugstory_photos/handcreme.jpg",
    name: "handcreme",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "5",
    image: "/Drugstory_photos/hustensaft.jpg",
    name: "hustensaft",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "6",
    image: "/Drugstory_photos/Lip Sleeping Mask.jpg",
    name: "Lip Sleeping Mask",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "7",
    image: "/Drugstory_photos/meridol_zahnbuerste.jpg",
    name: "Meridol Zahnbuerste",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "8",
    image: "/Drugstory_photos/Nivea Creme.jpg",
    name: "Nivea Creme",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "9",
    image: "/Drugstory_photos/Shampoo Head & Shoulders.jpg",
    name: "Head & Shoulders",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "10",
    image: "/Drugstory_photos/zahnpasta.jpg",
    name: "Zahnpasta",
    quantity: 1,
    measure: "Pcs",
  },
];

function DrugstoryList() {
  const lists = useSelector((state) => state.list.lists);

  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {DRUGSTORY_DATA.map((f) => (
        <DrugstoryItem
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

export default DrugstoryList;
