/**
 * Converts DateTime to Date and handles timezone
 * @param {date} givenDate - the date to be formatted
 */
export const dateFormat = (givenDate) => {
  let formattedDate = new Date(givenDate);
  const offset = formattedDate.getTimezoneOffset();
  formattedDate = new Date(formattedDate.getTime() - offset * 60 * 1000);
  return formattedDate.toISOString().split("T")[0];
};
