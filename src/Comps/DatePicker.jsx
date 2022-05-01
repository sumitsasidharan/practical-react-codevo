import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerComp = () => {
   const [selectedDate, setSelectedDate] = useState(null)

  return (
     <div style={{width: '500px'}}>
        <h1>DatePicker</h1>

        <DatePicker
           selected={selectedDate}
           onChange={(date) => setSelectedDate(date)}
           dateFormat="dd/MM/yyyy"
           minDate={new Date()}
           filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
           isClearable
           showYearDropdown
           scrollableMonthYearDropdown
        />
     </div>
  );
}

export default DatePickerComp