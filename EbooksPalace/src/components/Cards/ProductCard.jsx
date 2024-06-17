// // src/components/ProductCard.js

// import React from 'react';
// import styles from './ProductCard.module.css';

// const ProductCard = (product) => {
//   return (
//     <div className={styles.card}>
//       <img src={product.image} alt={product.name} className={styles.image} />
//       <div className={styles.details}>
//         <h2 className={styles.name}>{product.name}</h2>
//         <p className={styles.detail}>{product.detail}</p>
//         <p className={styles.price}>${product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// src/components/Cards/ProductCard.jsx
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, name, author, editorial, price, category, image, description }) => {
  return (
    <div className={styles.card} key={id}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.author}>by {author}</p>
        <p className={styles.editorial}>{editorial}</p>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

