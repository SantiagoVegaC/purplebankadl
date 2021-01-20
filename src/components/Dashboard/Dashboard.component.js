import React, { useEffect, useState } from 'react'
import {
  DashboardContainer,
  DashboardOtherProducts,
  DashboardData,
  DashboardDataInfo,
} from './Dashboard.styles'
import { replaceNumbers } from '../../helpers/replaceNumbers'
import { getProductType } from '../../helpers/getProductType'
import { additionalInfo } from '../../helpers/additionalInfo'
import { type } from '../../helpers/type'
import data from '../../helpers/data.json'
import { formatDay } from '../../helpers/formatDay'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../../redux/actions/data'

/** @description This functional component is the main page to see purple bank info
 *  @version 1.0.0
 *  @since 20/01/2021
 *  @author Santiago Vega Cortés <davidvega1414@gmail.com>
 *
 *  @function
 *  @name dashboard
 *  @returns {Component} Returns components
 **/

const Dashboard = () => {
  const [seeMore, setSeeMore] = useState(false)
  const [seeIndex, setIndex] = useState()
  const dispatch = useDispatch()
  const purpleData = useSelector(({ purpleData }) => purpleData.data)

  useEffect(() => {
    if (!purpleData || purpleData.length <= 0) {
      dispatch(
        setData(
          data?.filter((pbdata) => pbdata.product.issuer === type.PURPLE_BANK)
        )
      )
    }
  }, [dispatch, purpleData])

  const showInfo = (index) => {
    setSeeMore((prevState) => !prevState)
    setIndex(index)
  }

  return (
    <>
      <DashboardContainer>
        <DashboardOtherProducts>
          <a href="/otherProducts">Otros productos &gt;</a>
        </DashboardOtherProducts>
        <DashboardData>
          {purpleData?.map((purpleBank, index) => (
            <DashboardDataInfo key={index}>
              <p>
                <b>{getProductType(purpleBank.product.type)}</b>
                <br />
                Purple Bank
              </p>
              <p>
                <b>No.:&nbsp;</b>
                {purpleBank.product.type === type.CREDIT_CARD
                  ? replaceNumbers(purpleBank.product.id)
                  : purpleBank.product.id}
              </p>
              {purpleBank.product.type !==
              type.FIXED_TERM_DEPOSIT_CERTIFICATE ? (
                <p>
                  <b>Saldo:</b>{' '}
                  {`$${new Intl.NumberFormat('es-ES').format(
                    purpleBank.summary.balance
                  )}`}
                </p>
              ) : null}
              <p>
                <b>Fecha de caso:&nbsp;</b>
                {moment(purpleBank.issue_date).format(formatDay)}
              </p>
              <p>
                <b>Fecha de vencimiento:&nbsp;</b>
                {moment(purpleBank.due_date).format(formatDay)}
              </p>

              <button
                className="button purpleBank"
                onClick={() => {
                  showInfo(index)
                }}>
                {seeMore && seeIndex === index ? 'VER MENOS ' : 'VER MÁS '}
              </button>
              {seeMore && seeIndex === index && additionalInfo(purpleBank)}
            </DashboardDataInfo>
          ))}
        </DashboardData>
      </DashboardContainer>
    </>
  )
}

export default Dashboard
