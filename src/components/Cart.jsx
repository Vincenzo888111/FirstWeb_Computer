import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const shipping = 2;
  const total = subtotal + shipping;

  return (
    <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg w-80 z-50">
      <h2 className="text-xl font-bold mb-4">Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="max-h-60 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img
                  src={item.image}
                  className="w-[50px] h-[70px] object-cover rounded"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-green-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          <Link to="/payment">
            <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
