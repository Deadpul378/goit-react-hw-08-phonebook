import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  background-color: #fff;
  padding: 16px;
  border: solid 1px #00006e;
  border-radius: 3px;
  margin-right: 18px;
  font-weight: 700;
  &.active {
    color: white;
    background-color: black;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: white;
    background-color: black;
  }
`;
