export const expDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = date ? new Date(date) : new Date();

  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d
    .getFullYear()
    .toString()
    .slice(2)}`;
};
