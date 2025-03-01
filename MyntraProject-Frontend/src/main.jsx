import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bags from "./routes/Bags.jsx";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Profile from "./routes/Profile.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bags",
        element: <Bags />,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
