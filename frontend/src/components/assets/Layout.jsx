import { Outlet } from "react-router"
import { Hamburger } from "./Hamburger"
import styled from "styled-components"
import { Title } from "./Title"
import { useUserStore } from "../../stores/useUserStore"

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {
  const user = useUserStore((state) => state.user)

  return (
    <StyledLayout>
      <header>
        <Title />
      {user && 
        <Hamburger />
      }
      </header>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  )
}