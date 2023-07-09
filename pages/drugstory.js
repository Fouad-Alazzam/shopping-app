import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import DrugstoryList from "@/components/Drugstory/DrugstoryList";
function Drugstory() {
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
          <p>Drugstory</p>
        </div>
      </div>
      <div>
        <DrugstoryList />
      </div>
    </div>
  );
}

export default withAuth(Drugstory);
