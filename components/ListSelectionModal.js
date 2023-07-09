import React from "react";

import { useRouter } from "next/router";
function ListSelectionModal({ lists, onSelectList }) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md ">
        <h2 className="text-lg text-center font-semibold mb-2 bg-yellow-300 w-full p-2">
          Select a list
        </h2>
        {lists.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-gray-500 mb-2">No lists available</p>
            <button
              onClick={() => router.push("/createYourList")}
              className="bg-yellow-500  text-white px-4 py-2 rounded-md">
              Add a new list
            </button>
          </div>
        ) : (
          <ul className="space-y-2">
            {lists.map((list) => (
              <li
                key={list.id}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => onSelectList(list)}>
                {list.listName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListSelectionModal;
