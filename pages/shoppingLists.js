import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import ShopList from "@/components/Shopping/ShopList";

function ShoppingLists() {
  const router = useRouter();
  const lists = useSelector((state) => state.list.lists);

  return (
    <div className="">
      <div
        className=" sticky top-0 flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="  flex items-center justify-center space-x-2  text-black text-3xl font-semibold">
          <ChevronLeftIcon
            onClick={() => router.push("/createYourList")}
            className="h-7 w-7 cursor-pointer"
          />
          <p>My Shopping Lists</p>
        </div>
      </div>
      <div className="flex flex-grow flex-col   justify-between overflow-y-auto no-scrollbar ">
        <div className="overflow-y-scroll scrollbar-hide ">
          <ShopList lists={lists} />{" "}
        </div>
      </div>
    </div>
  );
}

export default withAuth(ShoppingLists);
