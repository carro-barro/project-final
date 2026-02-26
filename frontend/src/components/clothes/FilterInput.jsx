import styled from 'styled-components'

export const FilterInput = () => {
  return (
    <>
    <label for="category">Category:</label>
    <select name="category">
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="full-body">Full-body</option>
    </select>
    </>
  )
}