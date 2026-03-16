import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  max-width: 50%;
  border: 1px solid red;
`

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GarmentCard = ({ garment }) => {
  return (
    <StyledContainer>
      <StyledImg src={garment.imageUrl} alt={`picture of garment type: "${garment.garmentType}"`}/>
      <StyledInfoContainer>
        <p>{garment.garmentType}</p>
      </StyledInfoContainer>
    </StyledContainer>
  )
}