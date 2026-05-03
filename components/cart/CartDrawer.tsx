"use client";

import { useCartStore } from "@/store/cart.store";
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartDrawer({ open, setOpen }: any) {
  const {
    items,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    getTotalPrice,
  } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`mt-14 fixed top-0 right-0 h-full w-[360px] bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          {/* Empty */}
          {items.length === 0 && (
            <div className="text-center mt-16 text-gray-500">
              <div className="text-5xl mb-3">🛍️</div>
              <p className="text-sm">Your cart is empty</p>
            </div>
          )}

          {/* Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 border rounded-xl p-3 hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={item.image}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-1">
                  {item.name}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  ৳ {item.price} × {item.quantity}
                </p>

                <p className="text-sm font-semibold text-pink-500 mt-1">
                  ৳ {item.price * item.quantity}
                </p>

                {/* ➕➖ Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="text-sm font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-4 bg-white sticky bottom-0">

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="flex items-center justify-center gap-2 w-full text-sm text-red-500 hover:text-red-600 transition"
            >
              <Trash2 size={16} />
              Clear Cart
            </button>

            {/* Total */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total</span>
              <span className="text-lg font-bold text-pink-500">
                ৳ {totalPrice}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block text-center bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition font-medium"
            >
              Proceed to Checkout
            </Link>

            {/* WhatsApp fallback */}
            <a
              href={`https://wa.me/88017XXXXXXXX?text=I want to order items worth ৳${totalPrice}`}
              target="_blank"
              className="block text-center text-sm text-gray-500 hover:text-green-600 transition"
            >
              or order via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
}