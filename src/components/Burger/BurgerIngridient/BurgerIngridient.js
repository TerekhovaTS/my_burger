import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngridient.module.css';

const burgerIngridient = (props) => {
    let ingridient = null;

    switch(props.type) {
        case('bread-bottom'):
            ingridient = (
                <div className={styles.BreadBottom}></div>
            );
            break;
        case ('bread-top'):
            ingridient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingridient = (
                <div className={styles.Meat}></div>
            );
            break;
        case('cheese'):
            ingridient = (
                <div className={styles.Cheese}></div>
            );
            break;
        case('salad'):
            ingridient = (
                <div className={styles.Salad}></div>
            );
            break;
        case('bacon'):
            ingridient = (
                <div className={styles.Bacon}></div>
            );
            break;
        default:
            ingridient = null;
    }
    return ingridient;
};

burgerIngridient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngridient;