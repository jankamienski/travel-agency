import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <div className ={styles.component}>
        <h3 className ={styles.title}>{title}</h3>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};


export default HappyHourAd;