// // Cart.js
// import React from 'react';
// import './Cart.css'; // Ensure you have the styles

// const Cart = ({ cart }) => {
//   return (
//     <div className="cart">
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="cart-list">
//           {cart.map((item) => (
//             <li key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>${item.price.toFixed(2)}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
