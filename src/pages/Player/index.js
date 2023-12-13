import styles from "./Player.module.css"
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

const Player = () => {
    const parametros = useParams();
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/vinimllr/cinetag-api/videos?id=${parametros.id}`)
        .then(res => res.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player"></Banner>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    className={styles.player}
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </section>
        </>
    )

}

export default Player;