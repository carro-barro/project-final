import styled from "styled-components"

export const GarmentCard = () => {
  return (
    <StyledContainer>
      <StyledImg src={imageUrl} alt={`picture of garment type: "{garmentType}`}/>
      <StyledInfoConatiner>
        
        <p>{garmentType}</p>
      </StyledInfoConatiner>
    </StyledContainer>
  )
}