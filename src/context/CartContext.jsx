import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  isDrawerOpen: false,
};

function cartReducer(state, action) {
  let updatedItems;

  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((item) => item.id === action.payload.id);

      if (existing) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    }

    case "REMOVE_FROM_CART": {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    }

    case "CLEAR_CART": {
      localStorage.removeItem("cartItems");
      return { ...state, items: [] };
    }

    case "TOGGLE_DRAWER":
      return { ...state, isDrawerOpen: !state.isDrawerOpen };

    case "CLOSE_DRAWER":
      return { ...state, isDrawerOpen: false };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
