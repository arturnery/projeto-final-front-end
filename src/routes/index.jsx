import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { DishProvider } from "../hooks/dish";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  const { user } = useAuth();

  const getAdminPages = localStorage.getItem("@foodexplorer:isAdmin");

  const adminPages = JSON.parse(getAdminPages)

  return (
    <BrowserRouter>
      {user ? (adminPages ? <DishProvider> <AdminRoutes/> </DishProvider> : <AppRoutes/>) : <AuthRoutes />}
    </BrowserRouter>
  );
}
