import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import FruitsList from "@/components/Fruits&Vegetables/FruitsList";
import CakesandDairyList from "@/components/Cakes&Dairies/CakesandDairyList";
import withAuth from "../components/WithAuth";
function cakesAnddairy() {
  const router = useRouter();
  return (
    <div>
      <div
        className="sticky top-0 z-50 flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-3xl font-semibold">
          <ChevronLeftIcon
            onClick={() => router.push("/categories")}
            className=" h-7 w-7 cursor-pointer"
          />
          <p>Cakes and Daires</p>
        </div>
      </div>
      <div>
        <CakesandDairyList />
      </div>
    </div>
  );
}

export default withAuth(cakesAnddairy);
