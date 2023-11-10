"use client";
import { email } from "@/constant";
import styled from "styled-components";
import Side from "./Side";

const StyledLinkWrapper = styled.div`
  text-align: center;
  &:after {
    content: "";
    display: block;
    height: 90px;
    background-color: red;
    width: 1px;
    margin: 0 auto;
  }

  a {
    display: block;
    margin: 20px auto;
    padding: 10px;
    writing-mode: vertical-rl;
    letter-spacing: 0.2em;
    &:hover {
      transform: translateY(-5px);
    }
    transition: transform 0.5s;
  }
`;

function Email() {
  return (
    <Side orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </Side>
  );
}

export default Email;
