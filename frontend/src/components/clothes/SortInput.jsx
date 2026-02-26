import styled from "styled-components"

const StyledLabel = styled.label`
  margin: 0 5px 0 15px;
`

export const SortInput = () => {
  return (
    <>
      <StyledLabel for="sort">Sort by Timestamp:</StyledLabel>
      <select name="sort">
      <option value="Ascending">Ascending</option>
      <option value="Descending">Descending</option>
    </select>
    </>
  )
}