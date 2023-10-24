import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, ContentBox } from "./styles";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAdmin = 0;

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password){
      alert("Preencha todos os campos!");
    }

    api.post("/users", {
      name, 
      email,
      password,
      isAdmin
    }).then(() => { 
        navigate("/");
        return alert("Successfully registered user!")
      })
      .catch((error) => {
        if (error.response) { 
          return alert(error.response.data.message) 
        } else {
          return alert("Unable to register.") 
        }
      })
  }

  return (
    <Container>
      <Logo isbiggersize/>

      <ContentBox>
        <h2>Crie sua conta</h2>
        <Input id="name" labelContent="Seu nome" lesspace placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}/>
        <Input id="email" type="email" labelContent="Email" lesspace placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        <Input id="password" type="password" labelContent="Senha" lesspace placeholder="No mínimo 6 caracteres" min="6" onChange={e => setPassword(e.target.value)}/>
        <Button title="Criar conta" isbiggerfont onClick={handleSignUp}/>
        <TextButton to="/" title="Já tenho uma conta" />
      </ContentBox>
    </Container>
  )
}