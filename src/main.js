import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Подключение React-компонента

import "./style.css"; // Сохраните ваши стили

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
