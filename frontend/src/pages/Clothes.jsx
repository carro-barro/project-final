import { EmptyStateCard } from "../components/clothes/EmptyStateCard"
import { FilterInput } from "../components/clothes/FilterInput"
import styled from "styled-components"
import { SortInput } from "../components/clothes/SortInput"
import { Loader } from "../components/assets/Loader"

const StyledContainer = styled.div`
  margin-top: 30px;
`


export const Clothes = ({ loading, error }) => {
  return (
    <StyledContainer>
      <FilterInput/>
      <SortInput />
      {loading && <Loader />}
      {error && <p>Data unavalible right now!</p>}
      <EmptyStateCard />
    </StyledContainer>
  )
}