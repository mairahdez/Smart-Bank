import React from "react";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";

const StyledFooter = styled.div`
  background-color: ${colorPrimario};
  padding: 1rem;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter >
    Navega hacia un futuro financiero más inteligente con Smart Bank.
    </StyledFooter>
  );
};

export default Footer;
