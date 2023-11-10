import styled from "styled-components";

interface SideProps {
  children: React.ReactNode;
  orientation: string;
}

interface StyledWrapperProps {
  orientation: string;
}

const StyledSocialWrapper = styled.div<StyledWrapperProps>`
  position: fixed;
  width: 40px;
  bottom: 0px;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "right" ? "40px" : "auto")};
  z-index: 10;
`;

function Side({ children, orientation: orientation }: SideProps) {
  return (
    <StyledSocialWrapper orientation={orientation}>
      {children}
    </StyledSocialWrapper>
  );
}

export default Side;
