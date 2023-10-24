import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { Section } from '../../../components/Section'
import { CardData } from '../../../components/CardData'

import macarrons from '../../../assets/images/marrons.png'

import { api } from "../../../services/api"

import { Container, Content, Scroll, HomeMessage, Text, Sections, Cards } from './styles'

export function HomeAdmin() {
  const [dishes, setDishes] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  async function fetchDishes() {
    const { data } = await api.get(`/dishes?name=${search}`);

    setDishes(data.filter((dish) => dish.category === "dish"))
    setMainCourses(data.filter((mainCourse) => mainCourse.category === "main course"))
    setDrinks(data.filter((drink) => drink.category === "drink"))
  }

  fetchDishes()

  function handleDetails(id) {
    navigate(`/details_admin/${id}`)
  }

  useEffect(() => {
    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header admin onSearch={setSearch} />

      <Scroll>
        <Content>
          <HomeMessage>
            <img src={macarrons} alt="" />
            <Text>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Text>
          </HomeMessage>
          <Sections>
            <Section title="Refeições">
              <Cards>
                { dishes && dishes.map((dish) => (
                  <CardData key={String(dish.id)} image={`${api.defaults.baseURL}/files/${dish.image}`} name={dish.name} description={dish.description} price={dish.price} isbiggerfont onClick={() => handleDetails(dish.id)} dishId={dish.id} />
                ))}
              </Cards>
            </Section>
            <Section title="Pratos principais">
              <Cards>
                { mainCourses && mainCourses.map((mainCourse) => (
                  <CardData key={String(mainCourse.id)} image={`${api.defaults.baseURL}/files/${mainCourse.image}`} name={mainCourse.name} description={mainCourse.description} price={mainCourse.price} isbiggerfont onClick={() => handleDetails(mainCourse.id)} dishId={mainCourse.id} />
                ))}
              </Cards>
            </Section>
            <Section title="Bebidas">
              <Cards>
                { drinks && drinks.map((drink) => (
                  <CardData key={String(drink.id)} image={`${api.defaults.baseURL}/files/${drink.image}`} name={drink.name} description={drink.description} price={drink.price} isbiggerfont onClick={() => handleDetails(drink.id)} dishId={drink.id} />
                ))}
              </Cards>
            </Section>
          </Sections>
        </Content>

        <Footer />
      </Scroll>
    </Container>
  )
}
