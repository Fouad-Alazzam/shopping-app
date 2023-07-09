import React, { useState } from "react";
import ListSelectionModal from "../ListSelectionModal";
import { useDispatch } from "react-redux";
import { addItemToList } from "../../listSlice";

function ParfumItem({ id, name, quantity, image, measure, lists }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const dispatch = useDispatch();
  const handleAddToList = () => {
    setShowModal(true);
  };

  const handleSelectList = (list) => {
    setSelectedList(list);
    setShowModal(false);
    dispatch(
      addItemToList({
        listId: list.id,
        item: { id, name, quantity, image, measure },
      })
    );
  };

  return (
    <div className="m-5 ">
      <img className="h-[80px]  mx-auto rounded-full" src={image} alt={name} />
      <div className="text-center my-2">
        <p className="text-sm">{name}</p>
        <p>
          {quantity} <span className="text-gray-400">{measure}</span>
        </p>
      </div>
      <div
        className="bg-green-600 hover:bg-green-400 ease-in-out duration-300 w-3/4 mx-auto cursor-pointer rounded-2xl text-center text-white p-1"
        onClick={handleAddToList}>
        ADD
      </div>

      {showModal && (
        <ListSelectionModal lists={lists} onSelectList={handleSelectList} />
      )}
    </div>
  );
}

export default ParfumItem;
