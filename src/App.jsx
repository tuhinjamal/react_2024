import "./App.css";
import Layout from "./layout/";
import { useState } from "react";
import Card from "./components/Card";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter";
// import React from "react";
function App() {
  let [counter, setCounter] = useState(0);
  const [color, setColor] = useState("olive");
  const userInfo = {
    name: "tuhinjamal",
    email: "tuhinjamal1@gmail.com",
    userImg: "tuhinjamal.jpg",
  };
  const addValue = () => {
    setCounter(counter++);
  };
  const removeValue = () => {
    counter < 1 ? setCounter((counter = 0)) : setCounter(counter--);
  };
  return (
    <>
      <Layout />
      <div
        className="w-full  duration-200 text-center py-4"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold underline">Hello Chai aur React!</h1>
        <p>Count value: {counter}</p>
        <button onClick={addValue}>Add value</button>
        <button className="ml-2" onClick={removeValue}>
          Remove value
        </button>
        <div className=" flex flex-wrap justify-center ">
          <div className="mx-2">
            <Card userInfo={userInfo} />
          </div>
          <div className="mx-2">
            <PasswordGenerator />
          </div>
        </div>
        <div className="m-4 rounded-lg ">
          <CurrencyConverter />
        </div>

        <div
          style={{ backgroundColor: color }}
          className=" grid grid-cols-6 gap-4 py-2 rounded-lg mx-4 px-2 bg-white"
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
    </>
  );
}

export default App;
