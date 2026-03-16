import styled from "styled-components"
import { GarmentCard } from "./GarmentCard"
import { UseClosetStore } from "../../stores/useClosetStore"

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GarmentContainer = () => {

  const clothes = UseClosetStore((state) => state.allClothes)

  return (
    <StyledContainer>
      <div>
        <p>Total garments: {clothes.length}</p>
      </div>
      <StyledList>
        {clothes.map(garment => (
          <li key={garment.publicId}>
            <GarmentCard garment={garment} />
          </li>
        ))}
      </StyledList>
    </StyledContainer>
  )
}