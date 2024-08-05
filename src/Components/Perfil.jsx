import {
  PdadosPerfil,
  ContainerDadosPerfil,
  ContainerGeral,
  ContainerIcon,
  ContainerDadoseIcon,
  LinkStyled
  
} from "../Styles/dadosPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "../Styles/Icon.js";


const Perfil = ({ foto, ra, nome, itinerario, email }) => {
  return (
    <ContainerGeral>

      <ContainerDadoseIcon>
      <ContainerIcon>
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "260px", color: "#fff" }}
        />
      </ContainerIcon>
      <ContainerDadosPerfil>
        <PdadosPerfil>RA: {ra}</PdadosPerfil>
        <PdadosPerfil>{nome}</PdadosPerfil>
        {/* <PdadosPerfil>{itinerario}</PdadosPerfil> */}
        <PdadosPerfil>Email: {email}</PdadosPerfil>
        <LinkStyled href="https://www.npmjs.com/package/react-router-dom?activeTab=readme">Alterar senha</LinkStyled>
      </ContainerDadosPerfil>
      </ContainerDadoseIcon>
    </ContainerGeral>
  );
}

export default Perfil;
