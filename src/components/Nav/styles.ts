import styled from "styled-components";
import devices from "../../styles/devices";
import colors from "../../styles/colors";

export const IconImg = styled.img.attrs((props) => {
  src: props.src;
})`
  position: relative;
  width: 24px;

  @media ${devices.desktop} {
    width: 30px;
    top: 25px;
  }
`;

export const Logo = styled(IconImg)`
  left: -7px;

  @media ${devices.desktop} {
    left: -15px;
  }
`;

export const CloseIcon = styled(IconImg)`
  left: 7px;

  @media ${devices.desktop} {
    display: none;
  }
`;

export const Container = styled.div`
  padding: 37px;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.desktop} {
    width: 80%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.desktop} {
    justify-content: center;
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

    cursor: pointer;
  }

  & > li:hover:not(.disabled) {
    border-bottom: 1px solid ${colors.darkGrayishBlue};
  }

  .menuDivider {
    background-color: ${colors.grayishBlue};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }

  @media ${devices.desktop} {
    display: flex;
  }
`;
