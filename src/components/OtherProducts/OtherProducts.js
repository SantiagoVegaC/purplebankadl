import React, { useEffect, useState } from 'react'
import './OtherProducts.scss'
import { replaceNumbers } from '../../helpers/replaceNumbers'
import { getProductType } from '../../helpers/getProductType'
import { additionalInfo } from '../../helpers/additionalInfo'
import { type } from '../../helpers/type'
import data from '../../helpers/data.json'
import { formatDay } from '../../helpers/formatDay'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setOtherData } from '../../redux/actions/data'
import { getEntityType } from '../../helpers/getEntityType'

/** @description This functional component is the main page to see the info of the products of the differents entities
 *  @version 1.0.0
 *  @since 20/01/2021
 *  @author Santiago Vega Cortés <davidvega1414@gmail.com>
 *
 *  @function
 *  @name dashboard
 *  @returns {Component} Returns components
 **/

const OtherProducts = () => {
  const [seeMore, setSeeMore] = useState(false)
  const [seeIndex, setIndex] = useState()
  const dispatch = useDispatch()
  const otherData = useSelector(({ purpleData }) => purpleData.otherData)

  useEffect(() => {
    if (!otherData || otherData.length <= 0) {
      dispatch(
        setOtherData(
          data?.filter((info) => info.product.issuer !== type.PURPLE_BANK)
        )
      )
    }
  }, [dispatch, otherData])

  const showInfo = (index) => {
    setSeeMore((prevState) => !prevState)
    setIndex(index)
  }

  return (
    <div className="OtherProducts">
      <div className="OtherProducts-data">
        {otherData?.map((info, index) => (
          <div className="OtherProducts-data-info" key={index}>
            <p>
              <b>Tipo:</b> {getProductType(info.product.type)}
            </p>
            <p>
              <b>No.:&nbsp;</b>
              {info.product.type === type.CREDIT_CARD
                ? replaceNumbers(info.product.id)
                : info.product.id}
            </p>
            {info.product.type !== type.FIXED_TERM_DEPOSIT_CERTIFICATE ? (
              <p>
                <b>Saldo:</b>{' '}
                {`$${new Intl.NumberFormat('es-ES').format(
                  info.summary.balance
                )}`}
              </p>
            ) : null}
            <p>
              <b>Fecha de caso:&nbsp;</b>
              {moment(info.issue_date).format(formatDay)}
            </p>
            <p>
              <b>Fecha de vencimiento:&nbsp;</b>
              {moment(info.due_date).format(formatDay)}
            </p>

            <p>
              <b>Entidad:</b> {getEntityType(info.product.issuer)}
            </p>
            <button
              className="read-more-link"
              onClick={() => {
                showInfo(index)
              }}>
              <h2>
                {seeMore && seeIndex === index ? 'Ver menos ▲' : 'Ver más ▼'}
              </h2>
            </button>
            {seeMore && seeIndex === index && additionalInfo(info)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OtherProducts
