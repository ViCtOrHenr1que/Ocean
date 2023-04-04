import banner from "../../assets/banner.png"
import styles from './paginaInicial.module.scss';

import Cabecalho from "../../components/Cabecalho";
import Menu from "components/Menu";
import Rodape from "components/Rodepe";
import Galeria from "components/Galeria";
import Populares from "components/Populares";

export default function PaginaInicial () {


    return (
      <>
        <Cabecalho />
        <main>
          <section className={styles.principal}>
            <Menu />
            <div className={styles.principal__imagem}>
              <h1>A galeria mais completa do Oceano </h1>
              <img src={banner} alt="banner" />
            </div>
          </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
        </main>
        <Rodape />
      </>
    );
}