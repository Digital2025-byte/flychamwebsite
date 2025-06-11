'use client';

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";

const CustomCalendar = () => {
  const [dates, setDates] = useState([
    new DateObject().setDay(4) // Default to one selected date
  ]);

  return (
    <div className="relative flex justify-center py-10 bg-gray-50">
      <div className="bg-white rounded-xl p-4 shadow-lg w-full max-w-5xl">
        <DatePicker
          value={dates}
          onChange={setDates}
          numberOfMonths={3}
          onlyCalendar            // ✅ Always show calendar
          format="YYYY-MM-DD"
          className="custom-calendar teal"
          minDate="2025-05-01"
          maxDate="2025-07-31"
          disableDayPicker={false} // ✅ Make sure picker is not disabled
          calendarPosition="top"
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
