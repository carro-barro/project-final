import styled from "styled-components"
import { ButtonGroup } from "./ButtonGroup"


export const WelcomeModal = () => {
  
  return (
    <Overlay role="alertdialog" aria-modal="true" aria-labelledby="welcome-title">
      <StyledBox>
        <StyledContent>
          <StyledHeading id="welcome-title">Welcome to WearDrobe!</StyledHeading>
          <StyledText>Your own digital closet<br/>Start of by creating a user or login in to your existing account.</StyledText>
          <ButtonGroup/>
        </StyledContent>
      </StyledBox>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  height: 50%;
  background: ${({theme}) => theme.colors.background};
  text-align: center;
  justify-content: center;
`
const StyledContent = styled.div`
  padding: 16px;
`
const StyledHeading = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.lg};
`

const StyledText = styled.p`
  font-size: ${({theme}) => theme.fontSizes.sm};
`