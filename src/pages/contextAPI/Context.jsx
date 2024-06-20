import React from "react";
import { ThemeProvider } from "@/context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import Login from "./components/Login";
import Profile from "./components/Profile";
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
      <div className="bg-gray-600 text-white text-3xl p-4">
        <Login />
        <Profile />
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
    </>
  );
}

export default Context;