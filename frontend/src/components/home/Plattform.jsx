import styled from 'styled-components'

const StyledPlattform = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: -2px;
    width: 100%;
    height: 70%;
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    pointer-events: none;
  }
`

export const Plattform = () => {
  return (
    <StyledPlattform></StyledPlattform>
  )
}