import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";
import RouteNotFound from "./pages/RouteNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ListViewData } from "./pages/ListView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<RouteNotFound />}>
      <Route index loader={ListViewData} element={<ListView />} />
      <Route path="/details/:id" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
