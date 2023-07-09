import React from "react";
import { useSelector } from "react-redux";

import ParfumItem from "./ParfumItem";
const PARFÜMERIE = [
  {
    id: "1",
    image: "/Parfums_Photos/AZZARO.jpg",
    name: "AZZARO",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "2",
    image: "/Parfums_Photos/Bleu DE Chanel.jpg",
    name: "Bleu DE Chanel",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "3",
    image: "/Parfums_Photos/dior-sauvage.jpg",
    name: "dior-sauvage",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "4",
    image: "/Parfums_Photos/hugo-boss.jpg",
    name: "hugo-boss",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "5",
    image: "/Parfums_Photos/lacoste.jpg",
    name: "lacoste",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "6",
    image: "/Parfums_Photos/Miss Dior.jpg",
    name: "Miss Dior",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "7",
    image: "/Parfums_Photos/Scandal.jpg",
    name: "Scandal",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "8",
    image: "/Parfums_Photos/Si.jpg",
    name: "Si",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "9",
    image: "/Parfums_Photos/Versace.jpg",
    name: "Versace",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "10",
    image: "/Parfums_Photos/YOU-intensly.jpg",
    name: "YOU-intensly",
    quantity: 1,
    measure: "Pcs",
  },
];

function ParfumsList() {
  const lists = useSelector((state) => state.list.lists);

  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {PARFÜMERIE.map((f) => (
        <ParfumItem
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

export default ParfumsList;
