import styled from "styled-components"
import { Plattform } from "../components/home/Plattform"
import { WelcomeModal } from "../components/home/WelcomeModal"
import { useUserStore } from "../stores/useUserStore"

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Home = () => {
  const user = useUserStore((state) => state.user)

  return (
    <>
    {!user ? (
      <WelcomeModal/>
    ) : (
      <StyledContainer>
        <Plattform />
      </StyledContainer>
    )}
    </>
  )
}