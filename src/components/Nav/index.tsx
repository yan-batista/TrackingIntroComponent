import React from "react";

import logoImg from "../../../images/logo.svg";
import closeImg from "../../../images/icon-close.svg";
import { Header, Container, Logo, CloseIcon } from "./styles";

const Nav = () => {
  return (
    <Header>
      <Container>
        <Logo src={logoImg}></Logo>
        <CloseIcon src={closeImg} />
      </Container>
    </Header>
  );
};

export default Nav;
