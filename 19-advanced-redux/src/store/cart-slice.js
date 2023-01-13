import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((e) => e.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          title: newItem.title,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const existingItem = state.items.find((e) => e.id === action.payload);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((e) => e.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6e4f6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    
    try {
      sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "err",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    }

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      })
    );
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
