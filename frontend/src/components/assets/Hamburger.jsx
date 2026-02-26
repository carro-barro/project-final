import styled from "styled-components"
import { useState } from "react"
import { NavLink } from "react-router"


export const Hamburger = () => {
  const [expanded, setExpanded] = useState(false)
  
  const handleClick = () => {
    setExpanded(prev => !prev)
  }

  
  return (
    <StyledNav $expanded={expanded}>
      <StyledButton onClick={handleClick}
      aria-expanded={expanded}
      aria-label="Main menu"
      aria-controls="hamMenuList"
      >
        <StyledFirstSpan $expanded={expanded} aria-hidden="true"></StyledFirstSpan>
        <StyledSecondSpan $expanded={expanded} aria-hidden="true"></StyledSecondSpan>
        <StyledThirdSpan $expanded={expanded} aria-hidden="true"></StyledThirdSpan>
      </StyledButton>
      <StyledNavContent $expanded={expanded}>
        <StyledHamList>
          <li><StyledHamItem to="/">Home</StyledHamItem></li>
          <li><StyledHamItem to="/clothes">Clothes</StyledHamItem></li>
        </StyledHamList>
      </StyledNavContent>
    </StyledNav>
  )
}


const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  z-index: 3000;
  `

const StyledButton = styled.button`
  color: white;
  background-color: transparent;
  padding: 12px;
  border: none;
  z-index: 4001;
  position: relative;
`

const StyledNavContent = styled.div`
  position: absolute;
  padding: 0 24px 42px 24px;
  display: flex;
  flex-direction: column;
  background: pink;
  align-items: center;
  width: 100vw;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease;
  transform: ${({ $expanded }) =>
    $expanded ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ $expanded }) => ($expanded ? "1" : "0")};
  pointer-events: ${({ $expanded }) => ($expanded ? "all" : "none")};
`;

const StyledSpan = styled.span`
  display: block;
  height: 4px;
  width: 40px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 8px 0;
  border-radius: 2px;
  transition: transform 0.4s ease, opacity 0.3s ease;
`


const StyledFirstSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(12px) rotate(45deg)" : "initial")};
`


const StyledSecondSpan = styled(StyledSpan)`
  opacity: ${({ $expanded }) => ($expanded ? "0" : "initial")};
`


const StyledThirdSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(-12px) rotate(-45deg)" : "initial")};
`

const StyledHamList = styled.ul`
  list-style: none;
  padding: 5px;
  margin: 0;
`

const StyledHamItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
 
`
