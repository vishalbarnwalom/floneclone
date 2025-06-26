import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { SlHeart } from "react-icons/sl";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Your Wishlist Items</h2>

          {wishlist.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <th className="p-4">Image</th>
                    <th className="p-4">Product Name</th>
                    <th className="p-4">Unit Price</th>
                    <th className="p-4">Add To Cart</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => {
                    const discountedPrice = item.discount
                      ? (item.price * (1 - item.discount / 100)).toFixed(2)
                      : null;

                    return (
                      <tr
                        key={item.id}
                        className="border-t border-gray-200 text-sm"
                      >
                        <td className="p-4">
                          <Link to={`/product/${item.id}`}>
                            <img
                              src={item.image1 || item.image || item.imageUrl}
                              alt={item.name || item.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </Link>
                        </td>
                        <td className="p-4">
                          <Link
                            to={`/product/${item.id}`}
                            className="hover:underline font-medium"
                          >
                            {item.name || item.title}
                          </Link>
                        </td>
                        <td className="p-4">
                          {discountedPrice ? (
                            <>
                              <span className="line-through text-gray-400 mr-2">
                                ${item.price?.toFixed ? item.price.toFixed(2) : item.price}
                              </span>
                              <span className="text-green-600 font-semibold">
                                ${discountedPrice}
                              </span>
                            </>
                          ) : (
                            <span className="text-gray-700 font-medium">
                              ${item.price?.toFixed ? item.price.toFixed(2) : item.price}
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          {item.stock > 0 ? (
                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
                              Add to Cart
                            </button>
                          ) : (
                            <Link to="/checkout"><span className="text-black-500">Add to cart</span></Link>
                          )}
                        </td>
                        <td className="p-4">
                          <button
                            className="text-red-600 hover:underline text-sm"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Footer Actions */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <Link
                  to="/"
                  className="text-sm text-blue-600 hover:underline"
                >
                  ← Continue Shopping
                </Link>
                <button
                  className="text-sm text-red-600 hover:underline"
                  onClick={() => wishlist.forEach(item => removeFromWishlist(item.id))}
                >
                  Clear Wishlist
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="text-8xl mb-4 flex justify-center items-center">
                <SlHeart />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No items found in wishlist
              </h3>
              <Link
                to="/"
                className="text-blue-600 hover:underline text-sm"
              >
                Add Items
              </Link>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Wishlist;
