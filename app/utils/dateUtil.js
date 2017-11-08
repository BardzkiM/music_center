export function getFormattedDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}-${date.getMonth()}-${date.getYear()}`;
}