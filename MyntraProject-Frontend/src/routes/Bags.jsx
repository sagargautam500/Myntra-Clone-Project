import React from "react";
import "./Bags.css";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

function Bags() {
  const BagItemsID = useSelector((state) => state.bags);
  const Items = useSelector((state) => state.Items);
  const BagItems = Items.filter((item) => {
    const bagItem = BagItemsID.indexOf(item.id) >= 0;
    return bagItem;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          {BagItems.length === 0 && (
            <h1 className="msg">No items are available!</h1>
          )}
          {BagItems.map((item) => {
            return <BagItem key={item.id} item={item} />;
          })}
          <BagSummary BagItems={BagItems} />
        </div>
      </main>
    </>
  );
}

export default Bags;
