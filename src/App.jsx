import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuPage from "./pages/MenuPage";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuPage />
    </>
  );
};

export default App;
