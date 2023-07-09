import React from "react";
import { useSelector } from "react-redux";
import BeveragesItem from "./BeveragesItem";
const BEVERAGES_DATA = [
  {
    id: "1",
    image: "/Beverages_Photos/fanta-dose-0-33l.png",
    name: "fanta-dose-0-33l",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "2",
    image: "/Beverages_Photos/mineralwasser-still.jpg",
    name: "mineralwasser",
    quantity: 1,
    measure: "Packet",
  },
  {
    id: "4",
    image: "/Beverages_Photos/Trauben Saft.jpg",
    name: "Trauben Saft",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "5",
    image: "/Beverages_Photos/Vio Bio Limo.jpg",
    name: "Vio Bio Limo",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "6",
    image: "/Beverages_Photos/Vio Mineralwasser.jpg",
    name: "Vio Mineralwasser",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "7",
    image: "/Beverages_Photos/fanta-dose-0-33l.png",
    name: "Fanta",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "8",
    image: "/Beverages_Photos/Coca Cola.jpg",
    name: "Coca Cola",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "9",
    image: "/Beverages_Photos/Coca Cola Dose.jpg",
    name: "Coca Cola Dose",
    quantity: 1,
    measure: "Pcs",
  },
  {
    id: "10",
    image: "/Beverages_Photos/Apfel Saft.jpg",
    name: "Apfel Saft",
    quantity: 1,
    measure: "Pcs",
  },
];

function BeveragesList() {
  const lists = useSelector((state) => state.list.lists);
  console.log(lists);
  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {BEVERAGES_DATA.map((f) => (
        <BeveragesItem
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

export default BeveragesList;
