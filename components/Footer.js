import React from "react";
import { useRouter } from "next/router";
import {
  ArrowLeftOnRectangleIcon,
  BeakerIcon,
  ChevronLeftIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  PlusCircleIcon,
  PlusIcon,
  Square2StackIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
function Footer(props) {
  const router = useRouter();
  return (
    <div className="h-screen min-w-sm max-w-[414px] scrollbar-hide mx-auto flex flex-col justify-between ">
      <div className="flex-grow scrollbar-hide">{props.children}</div>

      <div className="bg-yellow-300 rounded-b-2xl z-50 sticky bottom-0 flex flex-row justify-evenly items-center h-12 py-2">
        <HomeIcon
          onClick={() => router.push("/homePage")}
          className="h-7 w-7 cursor-pointer"
        />
        <Squares2X2Icon
          onClick={() => router.push("/categories")}
          className="h-7 w-7 cursor-pointer"
        />
        <PlusCircleIcon
          onClick={() => router.push("/createYourList")}
          className="h-7 w-7 cursor-pointer"
        />

        <ClipboardDocumentListIcon
          onClick={() => router.push("/shoppingLists")}
          className="h-7 w-7 cursor-pointer"
        />

        <UserIcon
          onClick={() => router.push("/accountDetails")}
          className="h-7 w-7 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;
