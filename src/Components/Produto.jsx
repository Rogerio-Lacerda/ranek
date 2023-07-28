import React from 'react';
import styles from './Produto.module.css';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import Head from './Head';
import Image from './Image';

const Produto = () => {
  const { dados, error, loading, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [request, id]);

  if (loading && !dados && !error) return <div className="loading"></div>;
  if (error && !loading && !dados) return <p>{error}</p>;
  if (dados && !loading && !error)
    return (
      <>
        <Head
          title={`Ranek | ${dados.nome}`}
          description={`Essa é uma página do produto ${dados.nome}.`}
        />
        <section className={`${styles.produto} animeLeft`}>
          <div className={styles.imagens}>
            {dados.fotos.map(({ src, titulo }) => (
              <Image key={titulo} src={src} alt={titulo} />
            ))}
          </div>
          <div className={styles.conteudo}>
            <h2>{dados.nome}</h2>
            <span>R$ {dados.preco}</span>
            <p>{dados.descricao}</p>
          </div>
        </section>
      </>
    );
};

export default Produto;
