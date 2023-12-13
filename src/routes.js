import LayoutPadrao from "components/LayoutPadrao";
import Player from "pages/Player";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import {
  createBrowserRouter
} from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <LayoutPadrao />,
    errorElement: <NaoEncontrada/>,
    children: [
      {
        path: "",
        element: <Inicio />
      },
      {
        path: "favoritos",
        element: <Favoritos />
      },
      {
        path: "player",
        element: <h1>player</h1>
      },
      {
        path: ":id",
        element: <Player />
      },
      {
        path: "*",
        element: <NaoEncontrada />
      }
    ]
  },
]);

export default router