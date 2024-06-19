import { useState } from "react";
import Card from "../../components/Card";
import PasswordGenerator from "../../components/PasswordGenerator";
function Counter() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter++);
  };
  const removeValue = () => {
    counter < 1 ? setCounter((counter = 0)) : setCounter(counter--);
  };
  const userInfo = {
    name: "tuhinjamal",
    email: "tuhinjamal1@gmail.com",
    userImg: "tuhinjamal.jpg",
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className=" flex justify-center    py-4 text-black col-span-4 px-4 ">
          <Card userInfo={userInfo} />
        </div>
        <div className=" py-4 text-black col-span-4 px-4">
          <PasswordGenerator />
        </div>
        <div className=" py-4 text-black col-span-4 ">
          <h1 className="text-3xl font-bold underline">
            Hello Chai aur React!
          </h1>
          <p>Count value: {counter}</p>
          <button className="bg-green-600 rounded-lg p-2" onClick={addValue}>
            Add value
          </button>
          <button
            className="ml-2 bg-red-600 rounded-lg p-2"
            onClick={removeValue}
          >
            Remove value
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
