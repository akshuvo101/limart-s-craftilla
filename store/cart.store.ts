
import { create } from "zustand";
import { Product } from "@/types/product.types";

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;

  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;

  clearCart: () => void;

  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  // ✅ ADD TO CART
  addToCart: (product) =>
    set((state) => {
      const exists = state.items.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  // ❌ REMOVE ITEM
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // ➕ INCREASE QTY
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // ➖ DECREASE QTY
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0), // remove if 0
    })),

  // 🧹 CLEAR CART
  clearCart: () => set({ items: [] }),

  // 💰 TOTAL PRICE
  getTotalPrice: () => {
    const items = get().items;
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));