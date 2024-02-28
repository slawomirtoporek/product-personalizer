import styles from './ProductImage.module.scss';

const ProductImage = ({name, currentColor}) => {

  return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
    </div>
  );
};

export default ProductImage;