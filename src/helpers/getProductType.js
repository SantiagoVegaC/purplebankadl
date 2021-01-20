/**
 * Returns a string in Spanish depending on the product type that the function receives
 * @param {string} type
 */
export const getProductType = (type = '') => {
  let productType = ''
  switch (type) {
    case 'FIXED_TERM_DEPOSIT_CERTIFICATE':
      productType = 'Certificado de depósito a plazo fijo'
      break
    case 'FREE_INVESTMENT_LOAN':
      productType = 'Préstamo de inversión gratuito'
      break
    case 'CREDIT_CARD':
      productType = 'Tarjeta de crédito'
      break
    case 'CURRENT_ACCOUNT':
      productType = 'Cuenta actual'
      break

    default:
      return 'N/D'
  }
  return productType
}
