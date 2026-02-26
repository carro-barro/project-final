import { EmptyStateCard } from "../components/clothes/EmptyStateCard"
import { FilterInput } from "../components/clothes/FilterInput"

export const Clothes = () => {
  return (
    <>
      <FilterInput/>
      <EmptyStateCard />
    </>
  )
}