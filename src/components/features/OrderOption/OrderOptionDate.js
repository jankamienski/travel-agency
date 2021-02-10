import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';


const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};


OrderOptionDate.propTypes ={
  startDate: PropTypes.node,
  setStartDate: PropTypes.node,
  useState: PropTypes.node,
};

export default OrderOptionDate;


