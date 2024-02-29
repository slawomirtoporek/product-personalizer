import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Product = ({basePrice, title, name, colors, sizes, onSubmit}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

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

  const price = useMemo(() => {
    const findPrice = sizes.find((size) => size.name === currentSize);
    return basePrice + findPrice.additionalPrice;
  }, [sizes, currentSize, basePrice]);

  const cartSummary = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };
  
  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}</span>
        </header>
        <ProductForm  onSubmit={onSubmit} sizes={sizes} currentSize={currentSize} selectedSize={selectedSize} 
          colors={colors} selectedColor={selectedColor} 
          currentColor={currentColor} cartSummary={cartSummary} />
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