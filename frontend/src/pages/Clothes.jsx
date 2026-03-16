import { EmptyStateCard } from "../components/clothes/EmptyStateCard"
import { FilterInput } from "../components/clothes/FilterInput"
import styled from "styled-components"
import { SortInput } from "../components/clothes/SortInput"
import { Loader } from "../components/assets/Loader"
import { UseClosetStore } from "../stores/useClosetStore"
import { GarmentContainer } from "../components/clothes/GarmentContainer"

const StyledContainer = styled.div`
  margin-top: 30px;
`


export const Clothes = ({ loading, error }) => {

  const clothes = UseClosetStore((state) => state.allClothes)

  return (
    <StyledContainer>
      <FilterInput/>
      <SortInput />
      <div>
      {loading && <Loader />}
      {error && <p>Data unavalible right now!</p>}
      {clothes.length === 0 ? (
        <EmptyStateCard />
      ) : (
        <GarmentContainer />
      )}
      </div>
    </StyledContainer>
  )
}