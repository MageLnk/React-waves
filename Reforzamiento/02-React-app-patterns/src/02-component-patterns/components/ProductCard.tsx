// Hooks
import useProduct from "../hooks/useProduct";
// Styles
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
// App

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductImage = ({ img = "" }) => {
  return <img className={styles.productImg} src={img ? img : noImage} alt="Product" />;
};

const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};

export default ProductCard;