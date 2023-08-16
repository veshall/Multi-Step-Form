import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import Summary from "./pages/Summary";
import Addons from "./pages/Addons";
import Thankyou from "./pages/ThankYou";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorBoundary />} element={<Layout />}>
      <Route index element={<YourInfo />} />
      <Route path="selectplan" element={<SelectPlan />} />
      <Route path="addons" element={<Addons />} />
      <Route path="summary" element={<Summary />} />
      <Route path="thankyou" element={<Thankyou />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
