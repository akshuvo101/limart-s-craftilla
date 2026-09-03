"use client";

import { useCartStore } from "@/store/cart.store";
import { useState } from "react";

export default function CheckoutPage() {
  const { items } = useCartStore();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [payment, setPayment] = useState("bkash");
  const [trxId, setTrxId] = useState("");

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const message = `
🛒 Order Details:
${items
  .map(
    (item) =>
      `• ${item.name} x ${item.quantity} = ৳${
        item.price * item.quantity
      }`
  )
  .join("\n")}

Total: ৳${total}

Payment: ${payment.toUpperCase()}
Transaction ID: ${trxId || "N/A"}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Address: ${form.address}
`;

    window.open(
      `https://wa.me/88017XXXXXXXX?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-12">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl space-y-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Checkout Details 🧾
          </h2>

          {/* Inputs */}
          <div className="space-y-4">

            <input
              placeholder="Full Name"
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <textarea
              placeholder="Full Address"
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />
          </div>

          {/* Payment */}
          <div>
            <p className="font-semibold mb-3">Payment Method</p>

            <div className="flex flex-wrap gap-3">
              {["bkash", "nagad", "cod"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPayment(method)}
                  className={`px-5 py-2 rounded-full border text-sm transition ${
                    payment === method
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {method.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Transaction ID */}
          {payment !== "cod" && (
            <input
              placeholder="Transaction ID"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition"
            />
          )}

          {/* CTA */}
          <button
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full text-lg font-medium shadow-lg hover:scale-[1.02] transition"
          >
            Confirm Order 🚀
          </button>

          {/* Trust */}
          <p className="text-xs text-gray-500 text-center">
            🔒 Secure order • Fast delivery • Trusted handmade quality
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-20 h-fit">

          <h2 className="text-2xl font-bold text-gray-800">
            Order Summary 🛍️
          </h2>

          {items.length === 0 && (
            <p className="text-gray-500">No items in cart</p>
          )}

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold text-pink-500">
                  ৳ {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-bold pt-4 border-t">
            <span>Total</span>
            <span className="text-pink-500">৳ {total}</span>
          </div>

        </div>

      </div>
    </div>
  );
}