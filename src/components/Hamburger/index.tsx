import React, { useState } from "react";

import closeImg from "../../../images/icon-close.svg";
import hamburgerImg from "../../../images/icon-hamburger.svg";

import { CloseIcon, Container } from "./styles";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      {active && <CloseIcon src={closeImg} onClick={handleClick} alt="X icon to close the menu" />}
      {!active && (
        <CloseIcon
          src={hamburgerImg}
          onClick={handleClick}
          alt="3 horizonal lines on top of each other. Icon to open the menu"
        />
      )}
      <Container className="menu" menuActive={active}>
        <ul>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>
            <div className="menuDivider"></div>
          </li>
          <li className="disabled">Login</li>
        </ul>
      </Container>
    </>
  );
};

export default Hamburger;
