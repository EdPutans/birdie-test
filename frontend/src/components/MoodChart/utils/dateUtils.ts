/*
I dream of a day devs don't need to work with dates.
*/
export function timestampToHumanReadableDate(timestamp: string): string {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
