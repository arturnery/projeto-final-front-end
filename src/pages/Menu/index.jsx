import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";

import { Container, Content, List } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { MenuItem } from "../../components/MenuItem";
import { CardData } from "../../components/CardData";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function Menu() {
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");

  const [dishes, setDishes] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  async function fetchDishes() {
    const { data } = await api.get(`/dishes?name=${search}`);

    setDishes(data.filter((dish) => dish.category === "dish"))
    setMainCourses(data.filter((mainCourse) => mainCourse.category === "main course"))
    setDrinks(data.filter((drink) => drink.category === "drink"))
  }

  fetchDishes()


  if (windowWidth > 1024) {
    navigate("/")
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header isopened />

      <Content>
        <Input type="text" icon={CgSearch} placeholder="Busque por pratos ou ingredientes" onSearch={setSearch}/>

        <div>
          <MenuItem title="Sair" onClick={handleSignOut}  />
        </div>
        <List>
          { dishes && dishes.map((dish) => (
            <CardData key={String(dish.id)} image={`${api.defaults.baseURL}/files/${dish.image}`} name={dish.name} description={dish.description} price={dish.price} isbiggerfont onClick={() => handleDetails(dish.id)} dishId={dish.id} />
          ))}
          { mainCourses && mainCourses.map((mainCourse) => (
            <CardData key={String(mainCourse.id)} image={`${api.defaults.baseURL}/files/${mainCourse.image}`} name={mainCourse.name} description={mainCourse.description} price={mainCourse.price} isbiggerfont onClick={() => handleDetails(mainCourse.id)} dishId={mainCourse.id} />
          ))}
          { drinks && drinks.map((drink) => (
            <CardData key={String(drink.id)} image={`${api.defaults.baseURL}/files/${drink.image}`} name={drink.name} description={drink.description} price={drink.price} isbiggerfont onClick={() => handleDetails(drink.id)} dishId={drink.id} />
          ))}
        </List>

      </Content>

      <Footer />
    </Container>
  )
}