"use client";
import CustomButton from "@/component/Button";
import Link from "next/link";
import styled from "styled-components";
import styles from "./intro.module.css";

const StyledHeroSection = styled.section`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  margin-top: 100px;

  h1 {
    margin: 0 0 30px 4px;
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    line-height: 0.9;
    color: #ffadad;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    margin-top: 50px;
  }
`;

const Intro = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className={styles.bigHeading}>Uday Singh.</h2>;
  const three = (
    <h3 className={styles.bigHeading}>I build things for the web.</h3>
  );
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building & scaling lending product at{" "}
        <Link href="https://paytm.com/" target="_blank" rel="noreferrer">
          Paytm
        </Link>
        .
      </p>
    </>
  );
  const five = (
    <CustomButton
      style={{
        margin: "25px 0 0",
      }}
      kind="elevated"
      size="big"
      colorConfig={{
        edgeColors: {
          bottom: "gray",
          right: "gray",
        },
      }}
    >
      Check out my Blog!
    </CustomButton>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </StyledHeroSection>
  );
};

export default Intro;
