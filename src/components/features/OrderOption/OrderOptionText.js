import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = (id) => (
  <div className={styles.component}>
    <input
      className={styles.input}
      type='text'
      placeholder={(id==='name') ? 'Podaj imie' : 'contact'} // option is an array so I need to use map.
    />
  </div>
);

export default OrderOptionText;