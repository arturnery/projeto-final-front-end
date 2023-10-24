import { Link, useNavigate } from "react-router-dom";

import { VscChromeClose } from "react-icons/vsc";
import { PiReceipt } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { Container, Menu, ButtonBox, Requests } from "./styles";

import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";

export function Header({ isopened, admin, onSearch }) {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleMenu() {
    navigate("/")
  }

  function handleNewDish() {
    navigate("/new")
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container isopened={isopened}>
      <Menu>
        {isopened ? <Link to="/"> <VscChromeClose /> </Link> : <Link to={admin ? "/menu_admin" : "/menu"}> <IoMenu /> </Link>}
      </Menu>

      {isopened && <h1>Menu</h1>}
      {!isopened && <Logo onClick={() => handleMenu()} admin={admin ? "admin" : ""} />}

      <Input placeholder="Busque por pratos ou ingredientes" icon={CgSearch} onChange={e => onSearch(e.target.value)} iconSpace onClick={() => handleMenu()} ></Input>
      
      <ButtonBox>
        {admin ? <Button title="Novo Prato" onClick={() => handleNewDish()} isbiggerfont/> : <Button icon={PiReceipt} title="Pedidos (0)" isbiggerfont />}
      </ButtonBox>

      <a href="" onClick={handleSignOut}>
        <FiLogOut />
      </a>

      {!isopened && 
      <Requests>
        {!admin && <PiReceipt />}
      </Requests>}
    </Container>
  )
}