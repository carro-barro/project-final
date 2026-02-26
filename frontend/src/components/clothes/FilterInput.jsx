import styled from 'styled-components'

const StyledLabel = styled.label`
  margin-right: 5px;
`

const StyledSelect = styled.select`
  border-radius: 6px;
  font-size: ${({theme}) => theme.fontSizes.sm}
`

export const FilterInput = () => {
  return (
    <>
    <StyledLabel for="category">Category:</StyledLabel>
    <StyledSelect name="category">
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="full-body">Full-body</option>
    </StyledSelect>
    </>
  )
}