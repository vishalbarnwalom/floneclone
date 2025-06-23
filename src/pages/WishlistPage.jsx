import { Fragment } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Stylish T-Shirt",
      image: "/assets/img/product/product-1.jpg",
      price: 100,
      discount: 10,
      stock: 5
    },
    {
      id: 2,
      name: "Modern Sneakers",
      image: "/assets/img/product/product-2.jpg",
      price: 150,
      discount: 0,
      stock: 0
    }
  ];

  return (
    <Fragment>
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Your Wishlist Items</h2>

          {wishlistItems.length > 0 ? (
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
                  {wishlistItems.map((item) => {
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
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </Link>
                        </td>
                        <td className="p-4">
                          <Link
                            to={`/product/${item.id}`}
                            className="hover:underline font-medium"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="p-4">
                          {discountedPrice ? (
                            <>
                              <span className="line-through text-gray-400 mr-2">
                                ${item.price.toFixed(2)}
                              </span>
                              <span className="text-green-600 font-semibold">
                                ${discountedPrice}
                              </span>
                            </>
                          ) : (
                            <span className="text-gray-700 font-medium">
                              ${item.price.toFixed(2)}
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          {item.stock > 0 ? (
                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
                              Add to Cart
                            </button>
                          ) : (
                            <span className="text-red-500">Out of stock</span>
                          )}
                        </td>
                        <td className="p-4">
                          <button className="text-red-600 hover:underline text-sm">
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
                  to="/shop-grid-standard"
                  className="text-sm text-blue-600 hover:underline"
                >
                  ← Continue Shopping
                </Link>
                <button className="text-sm text-red-600 hover:underline">
                  Clear Wishlist
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">
                No items found in wishlist
              </h3>
              <Link
                to="/shop-grid-standard"
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
