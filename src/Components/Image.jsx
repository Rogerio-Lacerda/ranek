import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, src }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.container}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} alt={alt} className={styles.img} src={src} />
    </div>
  );
};

export default Image;
