import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { state } = useCart();
  const { items } = state;
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = items.reduce(
    (acc, item) =>
      acc + Number(String(item.price).replace(/[^\d.]/g, "")) * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // Optionally clear cart here
    // dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-3 gap-8">
      {!orderPlaced ? (
        <>
          {/* Billing Details */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing Details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input" />
                <input type="text" placeholder="Last Name" className="input" />
              </div>
              <input type="text" placeholder="Company Name" className="input" />
              <select className="input">
                <option value="">Select a country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <input type="text" placeholder="Street Address" className="input" />
              <input type="text" placeholder="Apartment, suite, unit etc." className="input" />
              <input type="text" placeholder="Town / City" className="input" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="State / County" className="input" />
                <input type="text" placeholder="Postcode / ZIP" className="input" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" className="input" />
                <input type="email" placeholder="Email Address" className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700">Order Notes</label>
                <textarea
                  rows="4"
                  placeholder="Notes about your order, e.g. delivery instructions."
                  className="input"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border h-fit sticky top-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Order</h3>
            <div className="border-b py-2 font-semibold flex justify-between text-gray-700">
              <span>Product</span>
              <span>Total</span>
            </div>
            {items.length === 0 ? (
              <p className="text-gray-500 py-6 text-sm">Your cart is empty.</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 text-sm text-gray-700">
                    <span>{item.title} × {item.quantity}</span>
                    <span>
                      €
                      {(
                        Number(String(item.price).replace(/[^\d.]/g, "")) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between text-sm border-t pt-2 mt-2 text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-4 mt-4">
                  <span>Total</span>
                  <span className="text-purple-600">€{total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="mt-6 w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2.5 rounded-full text-sm uppercase shadow"
                >
                  Place Order
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        // Order Placed UI
        <div className="md:col-span-3 flex flex-col items-center justify-center text-center py-20">
          <svg className="w-20 h-20 text-green-500 mb-4" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
            <path fill="none" stroke="currentColor" strokeWidth="4" d="M14 27l7 7 16-16" />
          </svg>
          <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">Thank you for your purchase. A confirmation email will be sent shortly.</p>
        </div>
      )}
    </div>
  );
}
