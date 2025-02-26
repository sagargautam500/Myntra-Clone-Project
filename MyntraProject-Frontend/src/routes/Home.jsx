import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const Items = useSelector((state) => state.Items);
  return (
    <>
      <main>
        <div className="items-container">
          {Items.map((item) => (
           <HomeItem key={item.id} item={item} />
          ))}
          {/* {Items.map((item) => {
           return <HomeItem key={item.id} item={item} />;
          })} */}
        </div>
      </main>
    </>
  );
}

export default Home;
