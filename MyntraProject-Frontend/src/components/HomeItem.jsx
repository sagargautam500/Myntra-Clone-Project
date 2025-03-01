import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagsAction } from "../store/bagSlice";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagsItems = useSelector((state) => state.bags);
  const elementFound = bagsItems.indexOf(item.id) >= 0;
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {!elementFound ? (
          <button
            className="btn-add-bag"
            // onClick={()=>dispatch(bagsAction.addBagItem(item))} //for first method
            onClick={() => dispatch(bagsAction.addBagItem(item.id))}
          >
           <IoIosAddCircle /> Add to Bag
          </button>
        ) : (
          <button
            className="btn-remove-bag"
            onClick={()=>dispatch(bagsAction.removeBagItem(item.id))}
          >
            <MdDeleteForever />Remove
          </button>
        )}
      </div>
    </>
  );
}

export default HomeItem;
