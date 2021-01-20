import moment from 'moment'
import { getStatus } from './getStatus'
import { formatDay } from './formatDay'

/**
 * Method that returns html with the information depending on the type of information card
 * @param {object} purpleBank
 */
export const additionalInfo = (purpleBank) => {
  const { type } = purpleBank.product
  if (type === 'FIXED_TERM_DEPOSIT_CERTIFICATE') {
    const {
      nominal_rate,
      amount,
      profits,
      term: { count, units },
    } = purpleBank.summary
    return (
      <div>
        <p>
          <b>Rango nominal:&nbsp;</b>
          {nominal_rate}
        </p>
        <p>
          <b>Monto:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(Math.trunc(amount))}`}
        </p>
        <p>
          <b>Ganancias:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(profits)}`}
        </p>
        <p>
          <b>Cuotas:</b> {count}&nbsp;
          {units === 'Months' ? 'Meses' : null}
        </p>
      </div>
    )
  }
  if (type === 'FREE_INVESTMENT_LOAN') {
    const {
      status,
      summary: {
        effective_monthly_rate,
        amount,
        paid_installments,
        total_installments,
        next_payment,
        next_payment_amount,
      },
    } = purpleBank
    return (
      <div>
        <p>
          <b>Tasa efectiva mensual:&nbsp;</b>
          {effective_monthly_rate}
        </p>
        <p>
          <b>Monto:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(Math.trunc(amount))}`}
        </p>

        <p>
          <b>Estado:&nbsp;</b>
          {getStatus(status)}
        </p>

        <p>
          <b>Cuotas pagadas:&nbsp;</b>
          {paid_installments}
        </p>
        <p>
          <b>Cuotas totales:&nbsp;</b>
          {total_installments}
        </p>
        <p>
          <b>Siguiente pago:&nbsp;</b>
          {moment(next_payment).format(formatDay)}
        </p>
        <p>
          <b>Próximo monto de pago:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(next_payment_amount)}`}
        </p>
      </div>
    )
  }
  if (type === 'CREDIT_CARD') {
    const {
      status,
      summary: {
        franchise,
        category,
        credit_line,
        advance_credit_line,
        total_due,
        min_payment,
        next_payment,
      },
    } = purpleBank
    return (
      <div>
        <p>
          <b>Franquicia:&nbsp;</b>
          {franchise}
        </p>
        <p>
          <b>Categoría:&nbsp;</b>
          {category}
        </p>
        <p>
          <b>Estado:&nbsp;</b>
          {getStatus(status)}
        </p>
        <p>
          <b>Línea de crédito:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(Math.trunc(credit_line))}`}
        </p>
        <p>
          <b>Línea de crédito anticipada:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(
            Math.trunc(advance_credit_line)
          )}`}
        </p>
        <p>
          <b>Total vencido:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(total_due)}`}
        </p>
        <p>
          <b>Pago mínimo:&nbsp;</b>
          {`$${new Intl.NumberFormat('es-ES').format(min_payment)}`}
        </p>
        <p>
          <b>Próximo pago:&nbsp;</b>
          {moment(next_payment).format(formatDay)}
        </p>
      </div>
    )
  }
  if (type === 'CURRENT_ACCOUNT') {
    const { status } = purpleBank
    return (
      <div>
        <p>
          <b>Estado:&nbsp;</b>
          {getStatus(status)}
        </p>
      </div>
    )
  }
}
