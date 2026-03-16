import styled from "styled-components"
import { Link } from "react-router"

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

export const WelcomeModal = () => {
  return (
    <StyledBox>
      <StyledHeading>Welcome to WearDrobe!</StyledHeading>
      <StyledText>Your own digital closet<br/>Start of by creating a user or login in to your existing account.</StyledText>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link>
    </StyledBox>
  )
}