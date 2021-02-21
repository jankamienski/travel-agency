import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id, setOptionValue}) => (
  <div className={styles.component}>
    <input
      className={styles.input}
      type='text'
      placeholder={(id==='name') ? 'Your name' : 'Contact details'}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes ={
  id: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;