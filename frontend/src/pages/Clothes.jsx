import { EmptyStateCard } from "../components/clothes/EmptyStateCard"
import { FilterInput } from "../components/clothes/FilterInput"
import styled from "styled-components"
import { SortInput } from "../components/clothes/SortInput"

const StyledContainer = styled.div`
  margin-top: 30px;
`


export const Clothes = () => {
  return (
    <StyledContainer>
      <FilterInput/>
      <SortInput />
      <EmptyStateCard />
    </StyledContainer>
  )
}