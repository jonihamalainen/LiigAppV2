export const convertTime = (time: Date): string => {
  const dateObject: Date = new Date(time);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Helsinki",
  };

  const outputDateString: string = dateObject.toLocaleString("fi-FI", options);

  return outputDateString;
};
