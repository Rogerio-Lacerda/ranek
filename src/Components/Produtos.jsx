import React from 'react';
import styles from './Produtos.module.css';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import Head from './Head';
import Image from './Image';

const Produtos = () => {
  const { dados, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto');
  }, [request]);

  if (loading && !dados && !error) return <div className="loading"></div>;
  if (error && !loading && !dados) return <p>{error}</p>;
  if (dados && !loading && !error)
    return (
      <>
        <Head
          title="Ranek"
          description="Este é um site de aparelhos eletrônicos."
        />
        <section className={`${styles.produtos} animeLeft`}>
          {dados.map(({ id, fotos, nome }) => (
            <Link
              className={styles.produtosItem}
              key={id}
              to={`/produto/${id}`}
            >
              <Image src={fotos[0].src} alt={fotos[0].titulo} />
              <h2>{nome}</h2>
            </Link>
          ))}
        </section>
      </>
    );
};

export default Produtos;
