import React from 'react';
import styles from './Contato.module.css';
import foto from '../assets/contato.jpg';
import Head from './Head';
import Image from './Image';

const Contato = () => {
  return (
    <>
      <Head
        title="Ranek | Contato"
        description="Esssa é a página de contato."
      />
      <section className={`${styles.contato} animeLeft`}>
        <Image alt='"Máquina de escrever"' src={foto} />
        <div className={styles.conteudo}>
          <h2>Entre em Contato.</h2>
          <ul className={styles.informacoes}>
            <li>produto@gmail.com</li>
            <li>99999-9999</li>
            <li>Rua Ali Perto, 999</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
