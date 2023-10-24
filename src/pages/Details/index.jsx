import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PiReceipt } from 'react-icons/pi'

import { Container, Scroll, Content, Tags, Main, Desktop, Flex } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { IngredientTag } from '../../components/IngredientTag'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

import { api } from '../../services/api';

export function Details() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState(null)

  const params = useParams();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let titleText = 'pedir';
  if (windowWidth > 1024) {
    titleText = 'incluir';
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
      <Header />

      { data && 
        <Scroll>
          <Content>
            <BackButton to="/"/>
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
                  <Quantity number="01" isDetails />

                  <Button icon={PiReceipt} title={titleText} value={data.price} noIcon id="button" />
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
