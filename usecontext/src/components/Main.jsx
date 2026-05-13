import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Main() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <p>
        O tema atual é: {darkMode ? "Escuro" : "Claro"}
      </p>
    </main>
  );
}

export default Main;