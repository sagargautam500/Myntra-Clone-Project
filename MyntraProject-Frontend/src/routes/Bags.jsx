import React from "react";
import "./Bags.css";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

function Bags() {
  const Items = useSelector((state) => state.Items);
  return (
    <>
      <main>
        <div className="bag-page">
          {Items.map((item) => {
            return <BagItem key={item.id} item={item} />;
          })}
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bags;
