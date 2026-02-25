import { Outlet } from "react-router"
import { Hamburger } from "./Hamburger"
import styled from "styled-components"
import { Title } from "./Title"

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {
  return (
    <StyledLayout>
      <header>
        <Title />
        <Hamburger />
      </header>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  )
}