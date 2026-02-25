import styled from "styled-components"

const StyledH1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
`

export const Title = () => {
  return <StyledH1>WearDrobe</StyledH1>
}