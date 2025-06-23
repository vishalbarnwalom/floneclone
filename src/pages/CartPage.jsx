import React from "react";
import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { items } = state;

  const total = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-5 border p-4 rounded-lg shadow-sm">
                <img
                  src={item.image1}
                  alt={item.title}
                  className="w-28 h-32 object-contain border"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-1">Color: {item.color || "N/A"}</p>
                  <p className="text-sm text-gray-600 mb-1">Size: {item.size || "N/A"}</p>
                  <p className="font-medium text-gray-800 mb-2">€{item.price}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex border rounded overflow-hidden">
                      <button
                        onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border p-6 rounded-lg shadow-sm space-y-4 h-fit">
            <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>€0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
           <Link to="/checkout"> <button className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded mt-6 text-sm font-semibold">
              Proceed to Checkout
            </button></Link>
            <Link to="/products" className="block text-center text-sm text-gray-500 hover:underline mt-2">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
