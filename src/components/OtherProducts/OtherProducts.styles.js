import styled from 'styled-components'

export const OtherProductsContainer = styled.div`
  background-color: whitesmoke;
  padding: 20px;
`

export const Back = styled.div`
  display: flex;
  justify-content: center;
  a {
    background-color: #a349a4;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
`

export const OtherProductsData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  overflow: auto;
`

export const OtherProductsDataInfo = styled.div`
  background-color: white;
  width: 270px;
  padding: 20px;
  margin: 20px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0);

  .button {
    border: none;
    padding: 6px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .otherBanks {
    background-color: white;
    color: #a349a4;
    &:hover {
      background-color: #e7e7e7;
    }
  }
`
