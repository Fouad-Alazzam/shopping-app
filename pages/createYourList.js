import React from "react";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library
import { setList, clearList } from "../listSlice";
import { useState } from "react";
import withAuth from "../components/WithAuth";
import { useRouter } from "next/router";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

function createYourList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [listNameError, setListNameError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setListNameError("");
    setDeadlineError("");

    // Check if list name or deadline is empty
    if (listName.trim() === "") {
      setListNameError("Please enter a list name");
      return;
    }

    if (deadline.trim() === "") {
      setDeadlineError("Please choose valid deadline");
      return;
    }

    // Check if the deadline is in the past
    const currentDate = new Date().toISOString().split("T")[0];
    if (deadline < currentDate) {
      setDeadlineError("Please choose a deadline that is in the future");
      return;
    }

    const listId = uuidv4();
    dispatch(setList({ id: listId, listName, deadline, items: [] }));
    router.push("/shoppingLists");
  };

  return (
    <>
      <div
        className="sticky top-0 z-50 flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-3xl font-semibold">
          <ChevronLeftIcon
            onClick={() => router.push("/")}
            className="h-7 w-7 cursor-pointer"
          />
          <p>Create New List</p>
        </div>
      </div>

      <div>
        <Image className=" mx-auto" src="/pic2.jpeg" height={200} width={250} />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-2/3 text-center">
        <div>
          <input
            type="text"
            className="bg-yellow-300 outline-none rounded-2xl my-2 w-full p-2 text-center"
            placeholder="List name"
            id="listName"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
          {listNameError && <p className="text-yellow-500">{listNameError}</p>}
        </div>
        <div>
          <input
            type="date"
            id="deadline"
            className="bg-yellow-300 outline-none rounded-2xl p-2 w-full text-center "
            placeholder="List name"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          {deadlineError && <p className="text-yellow-500">{deadlineError}</p>}
        </div>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center mt-10 space-x-2 bg-yellow-500 rounded-2xl p-2  mx-auto ">
          <PlusCircleIcon className="h-7 w-7" />
          <p>Save</p>
        </button>
      </form>
    </>
  );
}

export default withAuth(createYourList);
