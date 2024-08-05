import { format } from "date-fns";

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return format(date, "hh:mm a"); // Format to '12:00 PM'
};
