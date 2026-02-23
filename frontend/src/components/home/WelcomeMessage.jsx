import styled from "styled-components"

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledHeading = styled.h2`
  font-size: 20px;
`

const StyledText = styled.p`
  font-size: 13px;
`

export const WelcomeMessage = () => {
  return (
    <StyledBox>
      <StyledHeading>Welcome to WearDrobe!</StyledHeading>
      <StyledText>Start of by creating a user or sign in to your existing account</StyledText>
    </StyledBox>
  )
}