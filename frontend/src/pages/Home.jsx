import styled from "styled-components"
import { Plattform } from "../components/home/Plattform"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Home = () => {
  return (
    <StyledContainer>
      <Plattform />
    </StyledContainer>
  )
}