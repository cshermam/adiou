import React from "react";
import Perfil from "../Components/Perfil";
import Aluno from "../Aluno.json"; // Certifique-se de que o caminho está correto

const App = () => {
  const { usuarios } = Aluno;

  return (
    <div>
      {usuarios.map((usuario, index) => (
        <Perfil
          key={index}
          ra={usuario.ra}
          nome={usuario.nome}
          itinerario={usuario.itinerario}
          email={usuario.email}
        />
      ))}
    </div>
  );
};

export default App;