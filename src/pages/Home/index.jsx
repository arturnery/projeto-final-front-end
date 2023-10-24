import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { CardData } from '../../components/CardData'

import macarrons from '../../assets/images/marrons.png'
import sla from '../../assets/images/salada.png'

import { api } from "../../services/api"

import { Container, Scroll, Content, HomeMessage, Text, Sections, Cards } from './styles'

export function Home() {
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

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  fetchDishes()
  useEffect(() => {
    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header onSearch={setSearch}/>

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
                {!dishes ? <p>Sem resultados</p> : ""}
                { dishes && dishes.map((dish) => (
                  <CardData key={String(dish.id)} image={`${api.defaults.baseURL}/files/${dish.image}`} name={dish.name} description={dish.description} price={dish.price} isbiggerfont buttons onClick={() => handleDetails(dish.id)} />
                ))}
              </Cards>
            </Section>
            <Section title="Pratos principais">
              <Cards>
                {!mainCourses ? <p>Sem resultados</p> : ""}
                { mainCourses && mainCourses.map((mainCourse) => (
                  <CardData key={String(mainCourse.id)} image={`${api.defaults.baseURL}/files/${mainCourse.image}`} name={mainCourse.name} description={mainCourse.description} price={mainCourse.price} isbiggerfont buttons onClick={() => handleDetails(mainCourse.id)} />
                ))}
              </Cards>
            </Section>
            <Section title="Bebidas">
              <Cards>
                {!drinks ? <p>Sem resultados</p> : ""}
                { drinks && drinks.map((drink) => (
                  <CardData key={String(drink.id)} image={`${api.defaults.baseURL}/files/${drink.image}`} name={drink.name} description={drink.description} price={drink.price} isbiggerfont buttons onClick={() => handleDetails(drink.id)} />
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
