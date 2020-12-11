export function getOnlyYear(date) {
  try {
    return new Date(date).getFullYear();
  } catch (error) {
    return '';
  }
}
