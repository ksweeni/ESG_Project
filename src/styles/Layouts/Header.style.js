import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Toggler = styled(Navbar.Toggle)`
  border: none;
  &:focus {
    box-shadow: none;
  }
`;

export const NavLink = styled(Nav.Link)`
  text-align: center;
  margin-right: 2rem;
  font-size: 1.4rem;

  &:hover,
  &:focus {
    color: #00bfff;
  }

  @media (max-width: 768px) {
    line-height: 3rem;
    font-size: 1rem;
    border-bottom: 0.5px solid #d3d6cf;
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1389d0;
  margin-bottom: 0.5rem;

  &:hover,
  &:focus {
    color: gray;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    line-height: 3rem;
    font-size: 1rem;
    border-bottom: 0.5px solid #d3d6cf;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 4rem;
  max-height: 100%;
  margin-right: 0.5rem;
`;
