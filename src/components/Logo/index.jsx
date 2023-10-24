import diamond from "../../assets/icons/bluediamond.svg";
import { Container, Column } from "./styles";

export function Logo({ admin, isbiggersize, ...rest }) {
  return(
    <Container isbiggersize={isbiggersize} admin={admin} {...rest}>
      <img src={diamond} alt="" />
      <Column isbiggersize={isbiggersize}>
        <p>food explorer</p>
        {admin ? <p className="admin">admin</p> : ""}
      </Column>
    </Container>
  )
}