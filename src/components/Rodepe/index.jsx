import React from "react";
import styles from "./rodape.module.scss";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://github.com/ViCtOrHenr1que"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub color="#FFF" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-henrique-7952b4211/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin color="#FFF" size={24} />
        </a>
        <a
          href="https://www.instagram.com/victor.h_18/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram color="#FFF" size={24} />
        </a>
      </div>
      <p>Desenvolvido por Victor Henrique</p>
    </footer>
  );
}
