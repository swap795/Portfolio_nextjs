export function fetchWrapper(endpoint) {
  const baseUrl = "http://localhost:3000/";

  return fetch(baseUrl + endpoint);
}

export function extractMonthAndYear(dateStr) {
  const arr = dateStr.split(" ");

  const month = arr[1];
  const year = arr[3];

  return [month, year];
}

export function formatDate(date) {
  const [month, year] = extractMonthAndYear(date.toString());
  return `${month} ${year}`;
}
