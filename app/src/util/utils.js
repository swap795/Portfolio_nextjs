/**
 * @param {string} dateString
 * @returns {[string, string]}
 */
export function extractMonthAndYear(dateString) {
  const match = String(dateString).match(
    /\b([A-Z][a-z]{2,})(?:\s+\d{1,2})?\s+(\d{4})\b/
  );

  return match ? [match[1], match[2]] : ["", ""];
}

/**
 * @param {Date | string | number} date
 * @returns {string}
 */
export function formatDate(date) {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsedDate);
}
