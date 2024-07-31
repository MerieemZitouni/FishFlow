import React from 'react';
import styles from './Alertes.module.css';

const ParameterCard = ({ valueNumber, iconPath, parameterName }) => {
  return (
    <div className={styles.ParameterCard}>
      <h3 className={styles.parameterName}>{parameterName}</h3>
      <div className={styles.valueRow}>
        <h3 className={styles.valueNumber}>{valueNumber}</h3>
        <img src={iconPath} alt={`${parameterName} icon`} />
      </div>
    </div>
  );
};

export default ParameterCard;
