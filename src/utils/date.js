export function getOnlyYear(date) {
  try {
    return new Date(date).getFullYear();
  } catch (error) {
    return '';
  }
}

export function getFormatedRuntime(secondsToAdd) {
  try {
    const date = new Date('2020-10-10T02:00:00');
    date.setSeconds(secondsToAdd * 60);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `${hours}h${minutes}m${seconds}s`;
  } catch (error) {
    return '';
  }
}
