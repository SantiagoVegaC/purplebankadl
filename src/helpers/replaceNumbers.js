/**
 * Convert the credit card numbers to 'X' and leave the last 4 digits visible
 * @param {string} type
 */
export const replaceNumbers = (id) => {
  if (!id) {
    return
  }
  const regex = /\d(?=\d{4})/gm
  const subst = `X`
  const newString = id.replace(regex, subst)

  return newString
}
