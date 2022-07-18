import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app";
import { PokemonProfile } from "./pages/pokemonProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path=":id" element={<PokemonProfile />} />
    </Routes>
  </BrowserRouter>,
);
