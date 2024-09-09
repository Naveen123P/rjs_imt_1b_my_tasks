import styled from 'styled-components'

export const Button = styled.button`
  height: 2rem;
  padding: 0.4rem;
  border-radius: 3rem;
  color: #ffffff;
  font-weight: bold;
  margin-right: 1rem;
  border: 2px solid #f3aa4e;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
`

export const P = styled.p``
