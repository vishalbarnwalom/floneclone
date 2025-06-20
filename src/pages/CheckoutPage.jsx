import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
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
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-8">
      {/* Left Side */}
      {!orderPlaced ? (
        <>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <form className="space-y-6">
              {/* Form Inputs... */}
              {/* Same code as before */}
              {/* Keep your input fields and layout unchanged */}
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-2 w-full" />
                <input type="text" placeholder="Last Name" className="border p-2 w-full" />
              </div>
              <input type="text" placeholder="Company Name" className="border p-2 w-full" />
              <select className="border p-2 w-full">
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <input type="text" placeholder="House number and street name" className="border p-2 w-full" />
              <input type="text" placeholder="Apartment, suite, unit etc." className="border p-2 w-full" />
              <input type="text" placeholder="Town / City" className="border p-2 w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="State / County" className="border p-2 w-full" />
                <input type="text" placeholder="Postcode / ZIP" className="border p-2 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" className="border p-2 w-full" />
                <input type="email" placeholder="Email Address" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block font-medium mb-2">Order notes</label>
                <textarea
                  rows="4"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="border p-2 w-full"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-gray-100 p-6 rounded-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Your order</h3>
            <div className="flex justify-between border-b py-2 font-semibold">
              <span>Product</span>
              <span>Total</span>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-500 py-4">Your cart is empty.</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 text-sm">
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
                <div className="flex justify-between py-2 text-sm">
                  <span>Shipping</span>
                  <span>Free shipping</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-purple-600">€{total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-purple-500 text-white w-full mt-6 py-2 rounded-full font-semibold uppercase text-sm"
                >
                  Place Order
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="md:col-span-3 flex flex-col items-center justify-center text-center py-20">
          <svg className="checkmark w-20 h-20 mb-4 text-green-500" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path className="checkmark__check" fill="none" stroke="currentColor" strokeWidth="4" d="M14 27l7 7 16-16" />
          </svg>
          <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
}
