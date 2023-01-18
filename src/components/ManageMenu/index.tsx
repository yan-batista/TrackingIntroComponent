import React from "react";

import closeImg from "../../../images/icon-close.svg";
import { CloseIcon, MenuList } from "./styles";

const ManageMenu = () => {
  return (
    <>
      <CloseIcon src={closeImg} /> {/*Hamburguer*/}
      <MenuList>
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>
          <div className="menuDot"></div>
        </li>
        <li>Login</li>
      </MenuList>
    </>
  );
};

export default ManageMenu;
