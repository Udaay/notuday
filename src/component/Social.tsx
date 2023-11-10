"use client";
import { socialMedia } from "@/constant";
import Icon from "@/icons/icon";
import styled from "styled-components";
import Side from "./Side";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: red;
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      display: block;
      padding: 5px;
      transition: transform 0.4s;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        margin: 6px 0;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

function Social() {
  return (
    <Side orientation="left">
      <StyledSocialList>
        {socialMedia.map(({ url, name }, i) => (
          <li key={`${name}_${i}`}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </StyledSocialList>
    </Side>
  );
}

export default Social;
