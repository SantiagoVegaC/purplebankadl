/**
 * Returns a string in Spanish depending on the status type that the function receives
 * @param {string} type
 */
export const getStatus = (status) => {
  let convertedStatus
  switch (status) {
    case 'UP_TO_DATE':
      convertedStatus = 'Al día'
      break
    case 'OPEN':
      convertedStatus = 'Abierto'
      break
    case 'OVERDUE':
      convertedStatus = 'Vencido'
      break

    default:
      return 'N/D'
  }
  return convertedStatus
}
