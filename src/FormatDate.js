import React from "react";

export default function FormatDate(props) {
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[props.date.getMonth()];

  let year = props.date.getFullYear();

  return (
    <div className="FormatDate">
      {date}.{month}.{year}
    </div>
  );
}
