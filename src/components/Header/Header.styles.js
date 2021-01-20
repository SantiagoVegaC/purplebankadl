import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #a349a4;
  img {
    width: 250px;
  }
  p {
    font-size: 20px;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
