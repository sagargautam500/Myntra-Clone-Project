import React from "react";
import "./Bags.css";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

function Bags() {
  const BagItems = useSelector((state) => state.bags);
  return (
    <>
      <main>
        <div className="bag-page">
          {BagItems.length === 0 && (
            <h1 className="msg">No items are available!</h1>
          )}
          {BagItems.map((item, index) => {
            return <BagItem key={item.id} item={item} />;
          })}
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bags;
