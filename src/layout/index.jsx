import Header from "./layout-components/Header/Header.jsx";
import Footer from "./layout-components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

import "../App.css";
import { useState } from "react";
function Index() {
  const [color, setColor] = useState("white");
  return (
    <>
      <Header />
      <div
        id="layout-root"
        className="w-full  duration-200 text-center  grid grid-cols-1 justify-center"
        style={{ backgroundColor: color }}
      >
        <Outlet />

        <Footer />
        <div>
          <div
            style={{ backgroundColor: color }}
            className=" grid lg:grid-cols-6 gap-4 py-2   px-2 bg-white"
          >
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>{" "}
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-sm"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("magenta");
              }}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-sm"
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>
            <button
              onClick={() => {
                setColor("olive");
              }}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-sm"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
