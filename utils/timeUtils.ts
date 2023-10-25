export const convertTime = (time: Date | undefined): string | null => {
  if (time) {
    const dateObject: Date = new Date(time);

    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      timeZone: "Europe/Helsinki",
    };

    const outputDateString: string = dateObject.toLocaleString(
      "fi-FI",
      options
    );

    return outputDateString;
  } else {
    return null;
  }
};

export const checkYear = (): number => {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth();
  if (currentMonth >= 0 && currentMonth <= 5) {
    return currentYear;
  } else {
    return currentYear + 1;
  }
};
