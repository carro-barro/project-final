import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  max-width: fit-content;
  font-family: "Montserrat";
  font-size: ${({theme}) => theme.fontSizes.sm};
  background: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  border-radius: 20px;
  padding: 10px 20px;
`

  // ${({theme, $variant}) => $variant === "clothes" &&
  // `
  //   background: ${theme => theme.colors.secondary};
  // `}
export const Button = ({ variant, onClick, children }) => {
  return <StyledButton $variant={variant} onClick={onClick}>{children}</StyledButton>
}