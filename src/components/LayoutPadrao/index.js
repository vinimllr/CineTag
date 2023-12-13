import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider, { FavoritosContext } from "contextos/favoritos";
import { Outlet } from "react-router-dom";

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho>

            </Cabecalho>
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Rodape>

            </Rodape>
        </>
    )
}

export default LayoutPadrao;