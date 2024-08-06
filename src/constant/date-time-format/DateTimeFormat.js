import { format } from "date-fns";

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return format(date, "hh:mm a"); // Format to '12:00 PM'
};


export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMMM yyyy"); // Format to '25 July 1995'
};