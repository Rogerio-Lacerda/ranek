import React from 'react';
import styles from './Produtos.module.css';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const { dados, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto');
  }, [request]);

  if (loading && !dados && !error) return <div>Carregando...</div>;
  if (error && !loading && !dados) return <p>{error}</p>;
  if (dados && !loading && !error)
    return (
      <section className={styles.produtos}>
        {dados.map(({ id, fotos, nome }) => (
          <Link className={styles.produtosItem} key={id} to={`/produto/${id}`}>
            <img src={fotos[0].src} alt={fotos[0].titulo} />
            <h2>{nome}</h2>
          </Link>
        ))}
      </section>
    );
};

export default Produtos;
