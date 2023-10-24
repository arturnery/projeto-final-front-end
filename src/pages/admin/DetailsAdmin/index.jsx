import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Scroll, Content, Tags, Flex, Main, Desktop } from './styles'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { BackButton } from '../../../components/BackButton'
import { IngredientTag } from '../../../components/IngredientTag'
import { Button } from '../../../components/Button'

import { api } from "../../../services/api"

export function DetailsAdmin() {
  const [data, setData] = useState(null)

  const params = useParams();

  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/update/${id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
			setData(response.data);
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header admin />

      { data && 
      <Scroll>
        <Content>
          <BackButton />
          <Main>
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={`imagem do ${data.name}`} />

            <Desktop>
              <h1>{data.name}</h1>
              <p>
              {data.description}
              </p>

              {data.ingredients && 
                <Tags>
                  {
                    data.ingredients.map(ingredient => (
                      <IngredientTag key={String(ingredient.id)} title={ingredient.name} />
                    ))
                  }
                </Tags>
              }

              <Flex>
                <Button title="Editar prato" isbiggerfont onClick={() => handleEdit(data.id)} />
              </Flex>

            </Desktop>
          </Main>
        </Content>

        <Footer />
      </Scroll>
      }
    </Container>
  )
}
