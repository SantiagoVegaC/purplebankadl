import styled from 'styled-components'

export const DashboardContainer = styled.div`
  background-color: whitesmoke;
  padding: 20px;
`

export const DashboardOtherProducts = styled.div`
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

export const DashboardData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  overflow: auto;
`

export const DashboardDataInfo = styled.div`
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
  .purpleBank {
    background-color: white;
    color: #a349a4;
    &:hover {
      background-color: #e7e7e7;
    }
  }
`
