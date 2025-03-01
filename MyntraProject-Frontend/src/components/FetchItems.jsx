import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return; // Prevent redundant fetches

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusAction.markFetchingStart());

        const response = await fetch("http://localhost:8080/items", { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.items && result.items.length > 0) {
          dispatch(itemAction.addInitialItem(result.items[0]));
        } else {
          console.warn("No items found in the response.");
        }

        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingStop());
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone, dispatch]);

  return <div></div>;
}

export default FetchItems;
