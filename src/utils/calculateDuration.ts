export const calculateDuration = (
  endDate: Date,
  startDate: Date
): string => {
  let diffInMilliseconds = Math.abs(
    startDate.getTime() - endDate.getTime()
  );

  let diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  const days = Math.floor(diffInSeconds / (3600 * 24));
  diffInSeconds -= days * 3600 * 24;
  const hours = Math.floor(diffInSeconds / 3600);
  diffInSeconds -= hours * 3600;
  const minutes = Math.floor(diffInSeconds / 60);

  let result = "";

  if (days) result += days + " d ";

  if (hours) result += hours + " h ";

  if (minutes) result += minutes + " min ";

  return result;
};
