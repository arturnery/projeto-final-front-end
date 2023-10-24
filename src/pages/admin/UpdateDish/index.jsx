import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FiUpload } from "react-icons/fi"

import { Container, Scroll, SelectImage, LineOne, Ingredients, LineTwo, IngredientsList, TextAreaWrapper, ButtonsBox } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { IngredientItem } from "../../../components/IngredientItem"
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

import { api } from "../../../services/api";

export function UpdateDish() {
  const param = useParams();

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [dishes, setDishes] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  let buttonText = 'Selecione Imagem para alterá-la';
  if (windowWidth > 1024) {
    buttonText = 'Selecione Imagem';
  }

  async function fetchDishes(){
    const { data } = await api.get(`/dishes/${param.id}`);
    setDishes(data)
    setDescription(data.description)
    for (let ing of data.ingredients) {
      setIngredients(prevState => prevState.filter(ingredient => ingredient !== ing.name))
      setIngredients(prevState => [...prevState, ing.name])
    }
  }

  if(dishes.length == 0){
    fetchDishes()
  }

  function handleSelectedImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  }

  function handleAddIngredients () {
    setIngredients(prevState => [...prevState, newIngredient]) 
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleEditDish(e) {
    e.preventDefault()
    if (name == "" || !name) { setName(dishes.name) }
    if (category == "" || !category) { setCategory(dishes.category) }
    if (ingredients.length == 0) {setIngredients(dishes.ingredients)}

    if (price == "" || !price) { setPrice(dishes.price) }
    if (description == "" || !description) { setDescription(dishes.description)}

    if(!name || !price || !category) {
      return alert("Alguma informação está errada! Confira e tente novamente.")
    }

    if (image) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", image);

      await api.put(`/dishes/${param.id}`, { 
        name, 
        price, 
        description, 
        category, 
        ingredients 
      })

      fileUploadForm.append("dish_id", param.id);

      await api.patch("/dishes", fileUploadForm);

      navigate(-1)
      return alert("Editado com sucesso!")
    }

    await api.put(`/dishes/${param.id}`, { 
      name, 
      price, 
      description, 
      category, 
      ingredients 
    })

    navigate(-1)
    return alert("Editado com sucesso!")
  }

  async function handleDelete(e) {
    e.preventDefault()
    if(confirm("Tem certeza que quer apagar?")) {
      await api.delete(`/dishes/${param.id}`)
      alert("Item apagado.")
      navigate("/")
    }
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

  return (
    <Container>
      <Header admin />

        <Scroll>
          <Form title="Editar prato">
            <LineOne>
              <SelectImage>
                <label>Imagem do Prato</label>
                <input type="file" id="imageDish" onChange={handleSelectedImage} />
                <label htmlFor="imageDish">
                  <FiUpload />
                  {image ? image.name : buttonText}
                </label>
              </SelectImage>
              <Input type="text" defaultValue={dishes.name} labelContent="Nome" isdark onChange={e => setName(e.target.value)} />
              <Select labelContent="Categoria" id="category" defaultValue={dishes.category} onChange={e => setCategory(e.target.value)} />
            </LineOne>
            <LineTwo>
              <Ingredients>
                <label htmlFor="">Ingredientes</label>
                <IngredientsList>
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem key={String(index)} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)}/>
                    ))
                  }
                  <IngredientItem isNew placeholder="Adicionar" value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredients}/>
                </IngredientsList>
              </Ingredients>
              <Input type="number" labelContent="Preço" defaultValue={dishes.price} onChange={e => setPrice(e.target.value)} isNumber isdark step="0.01" min="0.01"/>
            </LineTwo>
            <TextAreaWrapper>
              <label htmlFor="">Descrição</label>
              <TextArea defaultValue={dishes.description} onChange={e => setDescription(e.target.value)}/>
            </TextAreaWrapper>
            <ButtonsBox>
              <Button isdark title="Excluir prato" isbiggerfont onClick={handleDelete} />
              <Button title="Salvar alterações" isbiggerfont isclear onClick={handleEditDish} ></Button>
            </ButtonsBox>
          </Form>

          <Footer />
        </Scroll>
    </Container>
  )
}