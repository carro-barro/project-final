import styled from "styled-components"
import { Button } from "../assets/Button"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

const StyledHeading = styled.h3`
  font-size: ${({theme}) => theme.fontSizes.lg};
  color: ${({theme}) => theme.colors.text};
`

export const EmptyStateCard = () => {
  return (
    <StyledCard>
      <StyledHeading>No clothes uploaded</StyledHeading>
      <Button variant="clothes" onClick={() => {}}>Upload Clothes</Button>
    </StyledCard>
  )
}

//button from assets where is says "upload clothes"