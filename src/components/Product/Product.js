import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({basePrice, title, name, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes.map(size => size === 'S'));

  const selectedSize = (size) => {
    if(size !== currentSize){
      setCurrentSize(size);
    }
  };

  const selectedColor = (color) => {
    if(color !== currentColor){
      setCurrentColor(color);
    }
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => 
                <li key={size.name}><button 
                  type="button" 
                  className={clsx(size.name === currentSize && styles.active)} 
                  onClick={() => selectedSize(size.name)}>
                  {size.name}
                </button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => 
                <li key={color}><button 
                type="button" 
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} 
                onClick={() => selectedColor(color)} />
              </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;