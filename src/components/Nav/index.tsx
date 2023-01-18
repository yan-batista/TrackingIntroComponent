import React from "react";

import logoImg from "../../../images/logo.svg";
import closeImg from "../../../images/icon-close.svg";
import { Container, Logo, CloseIcon } from "./styles";

const Nav = () => {
  return (
    <header>
      <Container>
        <Logo src={logoImg}></Logo>
        <CloseIcon src={closeImg} />
      </Container>
    </header>
  );
};

export default Nav;
