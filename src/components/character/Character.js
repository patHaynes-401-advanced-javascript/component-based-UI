import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    img: PropTypes.string
  };

  render() {
    const { name, species, img } = this.props;
    return (
      <div className={styles.CharacterContainer}>
        <dl className={styles.Character}>
          <dl>{name}</dl>
          <dl>{species}</dl>
          <img src={img} />
        </dl>
      </div>
    );
  }
}



