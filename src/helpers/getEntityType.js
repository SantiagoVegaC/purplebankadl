/**
 * Returns a string in Spanish depending on the id that the function receives
 * @param {string} type
 */
export const getEntityType = (type = '') => {
  let entityType = ''
  switch (type) {
    case 'RED_BANK':
      entityType = 'Red Bank'
      break
    case 'YELLOW_BANK':
      entityType = 'Yellow Bank'
      break
    case 'BLUE_BANK':
      entityType = 'Blue Bank'
      break
    case 'GREEN_BANK':
      entityType = 'Green Bank'
      break

    default:
      return 'N/D'
  }
  return entityType
}
