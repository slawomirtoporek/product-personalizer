import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import styles from '../Button/Button.module.scss';


const ProductForm = ({sizes, currentSize, selectedSize, colors, selectedColor, currentColor, cartSummary}) => {

  return (
    <form onSubmit={cartSummary}> 
      <OptionSize sizes={sizes} currentSize={currentSize} selectedSize={selectedSize} />
      <OptionColor colors={colors} selectedColor={selectedColor} currentColor={currentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" onClick={(e) => cartSummary(e)} />
      </Button>
    </form>
  );
};

export default ProductForm;