import clsx from 'clsx';
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({currentSize, sizes, selectedSize}) => {

  return (
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
  );
};

OptionSize.propTypes = {
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  selectedSize: PropTypes.func.isRequired
};

export default OptionSize;