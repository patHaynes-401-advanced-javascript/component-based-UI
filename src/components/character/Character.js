import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

function Character({ name, species, img }) {
  return (
    <dl className={styles.Character}>
      <dl>{name}</dl>
      <dl>{species}</dl>
      <img src={img} />
    </dl>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Character;
