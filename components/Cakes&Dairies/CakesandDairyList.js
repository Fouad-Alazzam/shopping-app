import React from "react";
import { useSelector } from "react-redux";
import CakesandDairyItem from "./CakesandDairyItem";
const CAKES_AND_DAIRY = [
  {
    id: "1",
    image: "/Cakes&Dairies_Photos/Willis-Donut-Cake-45g.jpg",
    name: "Willis-Donut",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "2",
    image: "/Cakes&Dairies_Photos/speisequark.png",
    name: "speisequark",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "3",
    image: "/Cakes&Dairies_Photos/sahne.png",
    name: "sahne",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "4",
    image: "/Cakes&Dairies_Photos/Muffin.jpg",
    name: "Muffin",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "5",
    image: "/Cakes&Dairies_Photos/milkaschokolade100g.jpg",
    name: "milkaschokolade100g",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "6",
    image: "/Cakes&Dairies_Photos/Landmilch.jpg",
    name: "Landmilch",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "7",
    image: "/Cakes&Dairies_Photos/kuchen.jpg",
    name: "kuchen",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "8",
    image: "/Cakes&Dairies_Photos/Kiwi_Kuchen_400g.png",
    name: "Tomatoes",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "9",
    image: "/Cakes&Dairies_Photos/Eier.jpg",
    name: "Eier",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "10",
    image: "/Cakes&Dairies_Photos/Eier_Bio.jpg",
    name: "Eier_Bio",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "11",
    image: "/Cakes&Dairies_Photos/CremigerQuark.png",
    name: "CremigerQuark",
    quantity: 1,
    measure: "Pcs",
  },
];

function CakesandDairyList() {
  const lists = useSelector((state) => state.list.lists);
  console.log(lists);
  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {CAKES_AND_DAIRY.map((f) => (
        <CakesandDairyItem
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

export default CakesandDairyList;
