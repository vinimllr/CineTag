import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contextos/favoritos';

function Favoritos() {
    const {favorito, adicionarFavoritos} = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(fav => <Card capa={fav.capa} id={fav.id} titulo={fav.titulo} key={fav.id}/>)}
            </section>

        </>
    )
}

export default Favoritos;