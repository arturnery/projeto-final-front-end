import { Route, Routes } from "react-router-dom";

import { DetailsAdmin } from "../pages/admin/DetailsAdmin";
import { HomeAdmin } from "../pages/admin/HomeAdmin";
import { MenuAdmin } from "../pages/admin/MenuAdmin";
import { NewDish } from "../pages/admin/NewDish";
import { UpdateDish } from "../pages/admin/UpdateDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <HomeAdmin />}/>
      <Route path="/details_admin/:id" element={ <DetailsAdmin />}/>
      <Route path="/menu_admin" element={ <MenuAdmin />}/>
      <Route path="/new" element={ <NewDish />}/>
      <Route path="/update/:id" element={ <UpdateDish />}/>
    </Routes>
  )
}