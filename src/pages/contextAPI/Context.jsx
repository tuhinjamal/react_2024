import React from "react";
import { ThemeProvider } from "@/context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "@/context/UserContextProvider.jsx";
import TodoList from "./TodoList";
function Context() {
  const [themeMode, setThemeMode] = React.useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  React.useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4 grid grid-cols-12">
        <div className="col-span-4">
          <UserContextProvider>
            <Login />
            <Profile />
          </UserContextProvider>
        </div>
        <div className="col-span-4">
          <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Card />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </div>
        <div className="col-span-4">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default Context;
