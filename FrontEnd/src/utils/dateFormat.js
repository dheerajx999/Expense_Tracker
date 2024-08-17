import moment from "moment";

export const dateFormattt = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
