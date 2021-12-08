// Necesitamos 2 cosas para mostar a un solo personaje
// 1.- La info del params para eso hacemos uso del hook useParams
//use params guarda en un objeto la propiedad y el valor {id:'3'}

import { useParams } from "react-router-dom";
// 2.- La data para obtener la info de 1 personaje en particular,
//para esto la mandamos 👇🏻 mediante el props
const Character = ({ allCharacters }) => {
  const { characters } = allCharacters;
  //Aca destructuramos para hacer uso del id del params
  //Ojo este id es un String
  const { id } = useParams();
  console.log(characters);
  //Aca hacemos el filter para obtener el personaje que coincida con el id del params
  const currentCharacter = characters.filter(
    //Ojo el character.id es un number
    (character) => character.id === Number(id)
  );
  console.log(currentCharacter);
  return (
    <div>
      <h1> One character</h1>
      {/* Finalmente ya que tenemos el personaje en currentCharacter */}
      {
        <div>
          {/* Ojo currentCharacter es un Array por esto tenemos que acceder al elemento con indice 0 
        este elemento 0 es un objeto entonces ya puedo acceder con notacion de punto a su propiedad name etc.
         */}
          <h2>{currentCharacter[0].name}</h2>
          <h3> Status: {currentCharacter[0].status}</h3>
          <img src={currentCharacter[0].image} alt={currentCharacter[0].name} />
        </div>
      }
    </div>
  );
};

export default Character;
