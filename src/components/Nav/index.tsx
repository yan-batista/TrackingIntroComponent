import React from "react";

import ManageMenu from "../ManageMenu";

import logoImg from "../../../images/logo.svg";
import { Header, Container, Logo } from "./styles";

const Nav = () => {
  return (
    <Header>
      <Container>
        <Logo src={logoImg}></Logo>
        <ManageMenu />
      </Container>
    </Header>
  );
};

export default Nav;
