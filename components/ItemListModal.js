import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CheckIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { BookmarkIcon, StarIcon } from "@heroicons/react/24/outline";
import { toggleItemStar, deleteItem, editItem } from "../listSlice";

function ItemListModal({ listId, listName, items, onClose }) {
  const dispatch = useDispatch();
  const [editedItems, setEditedItems] = useState([]);

  const handleStarClick = (itemId) => {
    dispatch(toggleItemStar({ itemId, listId }));
  };

  const handleEditItem = (itemId) => {
    if (editedItems.includes(itemId)) {
      const editedQuantity = document.getElementById(
        `quantity-input-${itemId}`
      ).value;
      dispatch(editItem({ listId, itemId, newQuantity: editedQuantity }));
      setEditedItems(editedItems.filter((id) => id !== itemId));
    } else {
      setEditedItems([...editedItems, itemId]);
    }
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem({ itemId, listId }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg text-center font-semibold mb-2 bg-yellow-300 w-full p-2">
          {listName} List
        </h2>
        <div className="relative space-y-2 w-[300px] overflow-y-auto max-h-[400px]">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">No items added</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="border-b-2 flex items-center justify-between">
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer"
                      checked={item.starred}
                      onChange={() => handleStarClick(item.id)}
                    />
                  </label>
                </div>
                <div className="flex items-center justify-center space-x-5">
                  <img
                    src={item.image}
                    className="w-[70px] text-center h-[70px]"
                    alt={item.name}
                  />
                  <div>
                    <p>{item.name}</p>
                    {editedItems.includes(item.id) ? (
                      <input
                        id={`quantity-input-${item.id}`}
                        type="text"
                        defaultValue={item.quantity}
                        className="border rounded px-2 py-1 w-[40px]"
                      />
                    ) : (
                      <p>
                        {item.quantity} <span>{item.measure}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <TrashIcon
                    onClick={() => handleDeleteItem(item.id)}
                    className="w-7 h-7 cursor-pointer mb-2 "
                  />
                  {editedItems.includes(item.id) ? (
                    <BookmarkIcon
                      onClick={() => handleEditItem(item.id)}
                      className="w-7 h-7 cursor-pointer  text-green-400"
                    />
                  ) : (
                    <PencilSquareIcon
                      onClick={() => handleEditItem(item.id)}
                      className="w-7 h-7 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="bg-yellow-500  w-full text-white px-4 py-2 rounded-md mt-4"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ItemListModal;
