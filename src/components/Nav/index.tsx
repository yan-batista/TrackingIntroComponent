import React from "react";

import Hamburguer from "../Hamburger";

import logoImg from "../../../images/logo.svg";
import closeImg from "../../../images/icon-close.svg";

import { Header, Container, Logo, CloseIcon, MenuList } from "./styles";

const Nav = () => {
  return (
    <Header>
      <Container>
        <Logo src={logoImg}></Logo>
        <>
          <Hamburguer />
          <MenuList>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>
              <div className="menuDivider"></div>
            </li>
            <li className="disabled">Login</li>
          </MenuList>
        </>
      </Container>
    </Header>
  );
};

export default Nav;
