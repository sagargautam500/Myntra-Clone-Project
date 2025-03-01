import React from "react";

function BagSummary({ BagItems }) {
  const Convenience_Fee = 99; // Fixed convenience fee

  let totalItem = BagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  BagItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += (item.original_price * item.discount_percentage) / 100;
    finalPayment += item.current_price;
  });

  // Add convenience fee at the end
  finalPayment += Convenience_Fee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{Convenience_Fee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;






// ........................................................another method::::
// import React from "react";

// function BagSummary({ BagItems }) {
//   const Convenience_Fee = 99; // Define it outside the loop so it's added once

//   const bagSummary = BagItems.reduce(
//     (summary, item) => {
//       summary.totalMRP += item.original_price;
//       summary.totalDiscount += (item.original_price * item.discount_percentage) / 100;
//       summary.finalPayment += item.current_price;
//       return summary;
//     },
//     {
//       totalItem: BagItems.length,
//       totalMRP: 0,
//       totalDiscount: 0,
//       finalPayment: 0,
//     }
//   );

//   // Add Convenience Fee after calculation
//   bagSummary.finalPayment += Convenience_Fee;

//   return (
//     <div className="bag-summary">
//       <div className="bag-details-container">
//         <div className="price-header">
//           PRICE DETAILS ({bagSummary.totalItem} Items)
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Total MRP</span>
//           <span className="price-item-value">₹{bagSummary.totalMRP}</span>
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Discount on MRP</span>
//           <span className="price-item-value priceDetail-base-discount">
//             -₹{bagSummary.totalDiscount}
//           </span>
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Convenience Fee</span>
//           <span className="price-item-value">₹{Convenience_Fee}</span>
//         </div>
//         <hr />
//         <div className="price-footer">
//           <span className="price-item-tag">Total Amount</span>
//           <span className="price-item-value">₹{bagSummary.finalPayment}</span>
//         </div>
//       </div>
//       <button className="btn-place-order">
//         <div className="css-xjhrni">PLACE ORDER</div>
//       </button>
//     </div>
//   );
// }

// export default BagSummary;
