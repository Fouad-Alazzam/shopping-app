import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  user: null,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.lists.push(action.payload);
    },
    deleteList: (state, action) => {
      const id = action.payload;
      state.lists = state.lists.filter((list) => list.id !== id);
    },
    clearList: (state) => {
      state.lists = [];
    },
    updateList: (state, action) => {
      const editedList = action.payload;
      const index = state.lists.findIndex((list) => list.id === editedList.id);
      if (index !== -1) {
        state.lists[index] = editedList;
      }
    },
    addItemToList: (state, action) => {
      const { listId, item } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const existingItem = list.items.find((i) => i.id === item.id);
        if (existingItem) {
          // Item already exists, increment the quantity
          existingItem.quantity += 1;
        } else {
          // Item does not exist, add it to the list
          list.items.push(item);
        }
      }
    },

    toggleItemStar: (state, action) => {
      const { listId, itemId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const item = list.items.find((item) => item.id === itemId);
        if (item) {
          item.starred = !item.starred;
        }
      }
    },

    deleteItem: (state, action) => {
      const { listId, itemId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.items = list.items.filter((item) => item.id !== itemId);
      }
    },

    editItem: (state, action) => {
      const { listId, itemId, newQuantity } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const item = list.items.find((item) => item.id === itemId);
        if (item) {
          item.quantity = newQuantity;
        }
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setList,
  deleteList,
  clearList,
  updateList,
  addItemToList,
  toggleItemStar,
  deleteItem,
  editItem,
  setUser,
} = listSlice.actions;
export default listSlice.reducer;
