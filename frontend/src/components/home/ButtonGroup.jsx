import styled from "styled-components"
import { Link } from "react-router"

const StyledLink = styled(Link)`
  border: none;
  max-width: fit-content;
  font-family: "Montserrat";
  font-size: ${({theme}) => theme.fontSizes.sm};
  background: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
`

export const ButtonGroup = () => {
  return (
    <>
      <StyledLink to="/signup">Sign up</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
   </>
  )
}