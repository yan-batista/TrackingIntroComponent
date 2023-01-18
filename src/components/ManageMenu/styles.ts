import styled from "styled-components";
import devices from "../../styles/devices";

export const IconImg = styled.img.attrs((props) => {
  src: props.src;
})`
  position: relative;
  width: 24px;

  @media ${devices.desktop_lg} {
    width: 30px;
    top: 25px;
  }
`;

export const CloseIcon = styled(IconImg)`
  left: 7px;

  @media ${devices.desktop} {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  list-style: none;

  position: relative;
  top: 28px;
  left: 40px;

  & > li {
    font-size: 16px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-right: 35px;
  }

  & > li:not(:nth-child(3)) {
  }

  .menuDot {
    background-color: black;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }

  @media ${devices.desktop} {
    display: flex;
  }
`;
