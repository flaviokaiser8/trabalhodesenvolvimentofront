import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={darkMode ? "dark" : "light"}>
      <h1>Sistema de Tema</h1>

      <button onClick={toggleTheme}>
        Trocar para {darkMode ? "Claro" : "Escuro"}
      </button>
    </header>
  );
}

export default Header;