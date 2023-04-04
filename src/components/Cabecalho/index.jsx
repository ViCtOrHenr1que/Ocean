import Logo from './logoo.png';
import Lupa from './search.png';
import  styles  from "./cabecalho.module.scss";

export default function Cabecalho() {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="Logo do Ocean" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura"/>
                <img src={Lupa} alt="Lupa" />
            </div>
        </header>
    )
}