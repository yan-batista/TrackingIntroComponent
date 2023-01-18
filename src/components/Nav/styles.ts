import styled from "styled-components";

export const IconImg = styled.img.attrs((props) => {
  src: props.src;
})`
  position: relative;
  width: 24px;
`;

export const Logo = styled(IconImg)`
  left: -7px;
`;

export const CloseIcon = styled(IconImg)`
  left: 7px;
`;

export const Container = styled.div`
  padding: 37px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
