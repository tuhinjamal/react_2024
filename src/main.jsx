import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Counter from "./pages/counter/Counter.jsx";
import Currency from "./pages/currency/Currency.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./layout";
// const customElementOne = (
//   <a href="https://google.com" target="_blank">
//     google
//   </a>
// );
// const customElementTwo = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click here to visit google"
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Counter />} />
      <Route path="currency" element={<Currency />} />
      {/* Currency */}
      {/* 
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
