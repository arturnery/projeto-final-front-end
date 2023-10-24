import { useState } from "react";
import { FiUpload } from "react-icons/fi"

import { useNavigate } from "react-router-dom";

import { Container, Scroll, LineOne, SelectImage, LineTwo, Ingredients, IngredientsList, TextAreaWrapper, ButtonsBox } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { IngredientItem } from "../../../components/IngredientItem"
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

import { api } from "../../../services/api";

export function NewDish() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("dish");

  const [ingredients, setIngredients] = useState([]);
  const [inputWidth, setInputWidth] = useState(8);
  const [newIngredient, setNewIngredient] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddIngredients () {
    setIngredients(prevState => [...prevState, newIngredient]) 
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleIngredientInput(e) {
    const value = e.target.value;
    setNewIngredient(value);
    setInputWidth(e.target.scrollWidth + 2);
  }

  function handleSelectedImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  }

  async function registerItem(e) {
    e.preventDefault()

    if (!name || name === "") { return alert("Adicione um nome!") }
    if (newIngredient) { return alert("Um ingrediente não foi adicionado à lista!") }
    if (!ingredients) { return alert("Adicione algum ingrediente.") }
    if (!price || price === "") { return alert("Adicione um preço!") }
  
    if (image) {

      const fileUploadForm = new FormData();
      fileUploadForm.append("image", image);

      const { data: dish_id } = await api.post("/dishes", {
        category,
        name,
        price,
        ingredients,
        description
      })

      fileUploadForm.append("dish_id", dish_id);

      await api.patch("/dishes", fileUploadForm);
      
      alert("Cadastrado com sucesso!")
      navigate(-1);
    } else {
      alert("Adicione uma imagem!")
    }
  }

  return (
    <Container>
      <Header admin />

      <Scroll>
        <Form title="Adicionar prato">
          <LineOne>
            <SelectImage>
              <label>Imagem do Prato</label>
              <input type="file" id="imageDish" onChange={handleSelectedImage} />
              <label htmlFor="imageDish">
                <FiUpload />
                {image ? image.name : "Selecione Imagem"}
              </label>
            </SelectImage>
            <Input type="text" labelContent="Nome" isdark placeholder="Ex.: Salada Ravanello" onChange={e => setName(e.target.value)}/>
            <Select labelContent="Categoria" id="category" onChange={e => setCategory(e.target.value)} />
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
                <IngredientItem isNew placeholder="Adicionar" value={newIngredient} inputWidth={inputWidth} onChange={handleIngredientInput} onClick={handleAddIngredients}/>
              </IngredientsList>
            </Ingredients>
            <Input type="number" labelContent="Preço" placeholder="00,00" isNumber isdark step="0.01" min="0.01" onChange={e => setPrice(e.target.value)}/>
          </LineTwo>
          <TextAreaWrapper>
            <label htmlFor="">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)}/>
          </TextAreaWrapper>
          <ButtonsBox>
            <Button title="Salvar alterações" isbiggerfont isclear onClick={registerItem}></Button>
          </ButtonsBox>
        </Form>

        <Footer />
      </Scroll>
    </Container>
  )
}