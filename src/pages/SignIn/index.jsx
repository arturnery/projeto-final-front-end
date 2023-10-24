import { useState } from "react";

import { Container, ContentBox } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo isbiggersize/>

      <ContentBox>
        <h2>Faça Login</h2>
        <Input id="email" type="email" border labelContent="Email" lesspace placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        <Input id="password" border type="password" labelContent="Senha" lesspace placeholder="No mínimo 6 caracteres" min="6" onChange={e => setPassword(e.target.value)}/>
        <Button title="Entrar" isbiggerfont onClick={handleSignIn}/>
        <TextButton to="/register" title="Criar conta" />
      </ContentBox>
    </Container>
  )
}