import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({colors, currentColor, selectedColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
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
  );
};

export default OptionColor;