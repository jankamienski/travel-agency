import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon.js';
import {formatPrice} from '../../../utils/formatPrice.js';


const OrderOptionIcons = ({values, setOptionValue, currentValue, required}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div value=''
        onClick={() => setOptionValue('')}
      ><Icon name={'times-circle'}>none</Icon></div>
    )}
    {values.map(value => (
      <div
        className={(value.id===currentValue) ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes ={
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;