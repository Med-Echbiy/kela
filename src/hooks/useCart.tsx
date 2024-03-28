"use client";
import { create } from "zustand";
import toast from "react-hot-toast";
import { Product, Product_Image } from "@/types";
export interface ProductProps extends Product {
  quantity: number;
}

interface StateProps {
  cart: ProductProps[];
  totalPrice: number;
  totalItems: number;
}
// Define the interface of the actions that can be performed in the Cart
interface Actions {
  addToCart: (Item: ProductProps) => void;
  removeFromCart: (Item: ProductProps) => void;
  reduceItem: (Item: ProductProps) => void;
  clearAll: () => void;
  updateLocalStoreage: () => void;
}

const getLocalData = JSON.parse(
  window.localStorage.getItem("cartData") || "{}"
);

const INITIAL_STATE: StateProps = {
  cart: getLocalData.cart ?? [],
  totalPrice: getLocalData.totalPrice ?? 0,
  totalItems: getLocalData.totalItems ?? 0,
};

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create<StateProps & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: ProductProps) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item._id === product._id);
    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity as number) + product.quantity }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + product.quantity,
        totalPrice:
          state.totalPrice +
          (product.onSale && product.onSale.is_sale
            ? product.onSale.salePrice
            : product.price) *
            product.quantity,
      }));
      toast.success(`Product quantity has been updated`);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice:
          state.totalPrice +
          (product.onSale && product.onSale.is_sale
            ? product.onSale.salePrice
            : product.price),
      }));

      toast.success("Added successfully");
      get().updateLocalStoreage();
    }
  },
  removeFromCart: (product: ProductProps) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item._id !== product._id),
      totalItems: state.totalItems - product.quantity,
      totalPrice:
        state.totalPrice -
        (product.onSale && product.onSale.is_sale
          ? product.onSale.salePrice
          : product.price) *
          product.quantity,
    }));
    get().updateLocalStoreage();
  },
  reduceItem: (meal: ProductProps) => {
    set((state) => {
      const product = state.cart.find(
        (target_meal) => target_meal._id === meal._id
      );

      if (product && product.quantity < 2) {
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== meal._id),
          totalItems: state.totalItems - 1,
          totalPrice:
            state.totalPrice -
            (product.onSale && product.onSale.is_sale
              ? product.onSale.salePrice
              : product.price),
        };
      }

      const updatedCart = state.cart.map((item) =>
        item._id === meal._id ? { ...item, quantity: item.quantity - 1 } : item
      );

      if (product) {
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - 1 < 0 ? 0 : state.totalItems - 1,
          totalPrice:
            state.totalPrice -
              (product.onSale && product.onSale.is_sale
                ? product.onSale.salePrice
                : product.price) <
            0
              ? 0
              : state.totalPrice -
                (product.onSale && product.onSale.is_sale
                  ? product.onSale.salePrice
                  : product.price),
        };
      }
      get().updateLocalStoreage();
      return state;
    });
  },
  clearAll: () => {
    set(() => ({
      cart: [],
      totalPrice: 0,
      totalItems: 0,
    }));
    get().updateLocalStoreage();
  },
  updateLocalStoreage: () => {
    const data = JSON.stringify({
      cart: get().cart,
      totalItems: get().totalItems,
      totalPrice: get().totalPrice,
    });
    window.localStorage.setItem("cartData", data);
  },
  clearLocalStorage: () => {
    window.localStorage.clear();
  },
}));
