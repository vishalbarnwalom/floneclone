import React, { useRef } from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const { items, isDrawerOpen } = state;
  const drawerRef = useRef();

  const total = items.reduce(
    (acc, item) =>
      acc + Number(String(item.price).replace(/[^\d.]/g, "")) * item.quantity,
    0
  );
  const headerHeight = 72;

  return (
    <div
      className={`absolute right-0 transition-all duration-500 ease-in-out z-50 max-w-md w-[400px] ${
        isDrawerOpen
          ? "top-[42px] opacity-100 scale-100"
          : "top-0 opacity-0 scale-y-75 pointer-events-none"
      }`}
      style={{ top: isDrawerOpen ? 42 : 0 }}
      ref={drawerRef}
    >
      <div className="bg-white shadow-md rounded-md p-4 flex flex-col animate-slideDown max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        {/* <button
          className="self-end text-gray-400 hover:text-black text-lg mb-4"
          onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
        >
          <FiX size={22} />
        </button> */}

        {/* Title */}
        {/* <h2 className="text-xl font-bold mb-5 text-left">Your Cart</h2> */}

        {/* Items */}
        {items.length === 0 ? (
          <div className="text-gray-500 text-sm">No items added to cart</div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto max-h-60 pr-2">
              {items.map((item) => (
                <li key={item.id} className="mb-6 flex items-start gap-4">
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="w-20 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm leading-tight">
                        {item.title}
                      </p>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                        }
                        className="text-purple-600 hover:text-purple-800"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      New Price: €
                      {Number(
                        String(item.price).replace(/[^\d.]/g, "")
                      ).toFixed(2)}
                    </p>
                    {item.oldPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        Old: {item.oldPrice}
                      </p>
                    )}
                    <p className="text-xs text-gray-600">
                      Subtotal: €
                      {(
                        Number(String(item.price).replace(/[^\d.]/g, "")) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                    {item.color && (
                      <p className="text-sm text-gray-600">Color: {item.color}</p>
                    )}
                    {item.size && (
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between font-semibold text-sm mb-4">
              <span>Total :</span>
              <span>€{total.toFixed(2)}</span>
            </div>

            {/* Buttons */}
            <div className="space-y-3" style={{ display: "flex", flexDirection: "column" }}>
              <button className="slide-btn bg-transparent border border-black text-black px-8 py-3 text-lg uppercase tracking-wider font-semibold rounded relative overflow-hidden transition-colors duration-300">
                VIEW CART
              </button>
              <button className="slide-btn bg-transparent border border-black text-black px-8 py-3 text-lg uppercase tracking-wider font-semibold rounded relative overflow-hidden transition-colors duration-300">
                CHECKOUT
              </button>
              <style jsx>{`
                .slide-btn {
                  position: relative;
                  overflow: hidden;
                  color: white;
                  background: #343538;
                  z-index: 1;
                  transition: color 0.7s;
                  margin-left:10%;
                  margin-right:10%;
                }
                .slide-btn::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 0%;
                  height: 100%;
                  background: #a749ff;
                  z-index: -1;
                  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .slide-btn:hover {
                  color: #fff;
                }
                .slide-btn:hover::before {
                  width: 100%;
                }
              `}</style>
            </div>
          </>
        )}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px) scaleY(0.9); }
          100% { opacity: 1; transform: translateY(0) scaleY(1); }
        }
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
