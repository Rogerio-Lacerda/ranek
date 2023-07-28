import React from 'react';
import styles from './Contato.module.css';
import foto from '../assets/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <img src={foto} alt="Máquina de escrever" />
      <div className={styles.conteudo}>
        <h2>Entre em Contato.</h2>
        <ul className={styles.informacoes}>
          <li>produto@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
