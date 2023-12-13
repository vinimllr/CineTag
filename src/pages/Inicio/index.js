import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import listaDeVideos from "json/db.json"
import styles from "./inicio.module.css"
import { useEffect, useState } from "react";

const Inicio = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        fetch("https://my-json-server.typicode.com/vinimllr/cinetag-api/videos")
        .then(res => res.json())
        .then(dados => setVideos(dados))
    }, [])
    return (<>
        <Banner imagem="home"></Banner>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.videosContainer}>
            {videos.map((video) => {
                return <Card id={video.id} titulo={video.titulo} capa={video.capa} key={video.id}></Card>
            })}
        </section>
    </>
    )
}
export default Inicio;