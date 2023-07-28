import React from 'react';
import styles from './Produto.module.css';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const { dados, error, loading, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [request, id]);

  if (loading && !dados && !error) return <div>Carregando...</div>;
  if (error && !loading && !dados) return <p>{error}</p>;
  if (dados && !loading && !error)
    return (
      <section className={styles.produto}>
        <div className={styles.imagens}>
          {dados.fotos.map(({ src, titulo }) => (
            <img key={titulo} src={src} alt={titulo} />
          ))}
        </div>
        <div className={styles.conteudo}>
          <h2>{dados.nome}</h2>
          <span>R$ {dados.preco}</span>
          <p>{dados.descricao}</p>
        </div>
      </section>
    );
};

export default Produto;
