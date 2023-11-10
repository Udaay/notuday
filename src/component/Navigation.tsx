"use client";
import { Icon } from "@/icons";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/logo.svg";
import Link from "next/link";
import CustomButton from "./Button";

const StyledHeader = styled.div`
  height: 80px;
  outline: 2px solid white;
  padding: 18px 150px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  li {
    list-style: none;
  }
`;

function Navigation() {
  return (
    <StyledHeader>
      <StyledNav>
        <Image
          src="/uday.svg"
          alt="Uday logo"
          width={100}
          height={42}
          priority
        />
        <StyledUl>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <CustomButton
            textStyle={{
              fontSize: 16,
            }}
            size="medium"
            kind="flat"
            onClick={() => console.log("object")}
          >
            Resume
          </CustomButton>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default Navigation;
