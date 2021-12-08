// Aprender React-router-dom
// -Crear rutas dentro de nuestra app
// Aprender a utilizar Link para ir a las diferentes rutas
// Vamos a aprender sobre rutas nexteadas de la V6
// Vamos a aprender a generar rutas con segmentos dinamicos.
//--------------------------------------------

//Seccion de importaciones
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import data from "./rickAndyMorty.json";
import Character from "./pages/Character";

//Dummie components

const About = () => <h1>About</h1>;

const Home = () => <h1>Home</h1>;

function Preguntas() {
  return <h1>Preguntas</h1>;
}

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route index element={<Home />} />
            <Route
              path="/characters"
              element={<Characters allCharacters={data} />}
            >
              <Route path=":id" element={<Character allCharacters={data} />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
