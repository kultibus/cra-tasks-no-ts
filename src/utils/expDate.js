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

  const now = new Date();

  const d = date
    ? new Date(date)
    : new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
};

export const daysLeft = (date) => {
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const d = date
    ? new Date(date)
    : new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  const diff = new Date(d) - today;

  return `${Math.round(diff / 1000 / 3600 / 24)}`;
};
