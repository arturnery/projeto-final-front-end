import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const DishContext = createContext({});

function DishProvider({ children }) {
  const [dish, setDish] = useState(null);
  async function getDish ( dishId ) {
    try {
      const response = await api.get(`/dishes/${dishId}`)
      setDish(response.data);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("It was not possible to get Dish.")
      }
    }
  }

  return (
		<DishContext.Provider value={{ 
      getDish,
      dish
    }}>
      {children}
    </DishContext.Provider>
  )
}

function useDish() {
  const context = useContext(DishContext)
  return context
}

export { DishProvider, useDish }
