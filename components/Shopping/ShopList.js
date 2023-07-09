import React from "react";
import ShopItem from "./ShopItem";
import { useRouter } from "next/router";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function ShopList({ lists }) {
  const router = useRouter();
  if (!lists || lists.length === 0) {
    return (
      <div className="text-center mt-5">
        <p>No lists available.</p>
        <div
          onClick={() => router.push("/createYourList")}
          className="bg-yellow-400 flex items-center justify-center h-12 my-2  rounded-xl  cursor-pointer">
          <PlusCircleIcon className="w-7 h-7 " />
          <p>Add New List</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="overflow-y-scroll max-h-[calc(100vh-4rem)]  no-scrollbar">
        {lists.map((l) => (
          <ShopItem
            key={l.id}
            id={l.id}
            name={l.listName}
            deadLine={l.deadline}
            items={l.items}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopList;
