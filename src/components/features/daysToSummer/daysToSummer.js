import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  constructor(){
    super();
    setInterval(() => {
      this.forceUpdate();
    },
    24 * 60 * 60 * 1000   // one day
    );
  }

  getCountdownDays() {
    const currentDate = new Date();
    const singleDay = 24 * 60 * 60 * 1000;
    const nextSummerTime = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21, 0, 0, 0));
    console.log(currentDate.getUTCDate());

    // 5 == june
    
    if ((currentDate.getUTCMonth() == 5 && currentDate.getUTCDate() >= 21) || currentDate.getUTCMonth() == 6 || currentDate.getUTCMonth() == 7 || (currentDate.getUTCMonth() == 8 && currentDate.getUTCDate() < 23)) {
      return '';
    
    } else {
      const result = Math.round(Math.abs(nextSummerTime.getTime() - currentDate.getTime())/singleDay);
      if (result == 1 ) {
        return '1 day to summer';
      } else
        return result + ' days to summer';
    }
    // Math.abs() return absolute value
    // Match.round() return rounded value
  }

  render() {

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.getCountdownDays()}</h3>
      </div>
    );
  }
}


DaysToSummer.propTypes = {
  daysDescription: PropTypes.string,
};

export default DaysToSummer;