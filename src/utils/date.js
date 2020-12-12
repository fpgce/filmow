export function getOnlyYear(date) {
  try {
    return new Date(date).getFullYear();
  } catch (error) {
    return '';
  }
}

export function getFormatedRuntime(secondsToAdd) {
  try {
    const date = new Date('2020-10-10T03:00:00');
    date.setMinutes(secondsToAdd);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `${hours}h${minutes}m`;
  } catch (error) {
    return '';
  }
}
