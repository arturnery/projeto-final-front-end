import { Route, Routes } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/details/:id" element={ <Details />}/>
      <Route path="/menu" element={ <Menu />}/>
    </Routes>
  );
}