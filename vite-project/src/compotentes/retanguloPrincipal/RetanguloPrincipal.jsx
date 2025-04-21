import React from 'react'
import "./retanguloPrincipal.css"
import logo from "../../assets/perfilLogoGithub.png"
import iconeBusca from "../../assets/icone-busca.png"
import { useState } from 'react'
import imgpessoa from "../../assets/image.png"

const RetanguloPrincipal = () => {
    const [valorInput,setValorInput] = useState("");
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [respostaUsuario, setRespostaUsuario] = useState(false)
    const [buscou, setBuscou] = useState(false);
    const [loading, setLoading] = useState(false);
    const buscaUsuario = async  (e) =>{
        e.preventDefault();
        setBuscou(true);
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${valorInput}`);
            if (response.ok){            
                const data = await response.json();
                setUserData(data);
                setRespostaUsuario(true);  
            }else{
                throw new Error("Usuário não encontrado"); 
            }
        } 
        catch (error) {
            setUserData(null);
            setRespostaUsuario(false);
        }finally{
          setLoading(false);
        }
    };
    
  
    return (
      <div className="container-retangulo-principal">
        <div className="retangulo">
          <div className="dados-fixos">
            <div className="logo-github">
              <img src={logo} alt="logo github" />
            </div>

            <div className="input-retangulo-principal">
              <input
                type="text"
                onChange={(e) => {
                  setValorInput(e.target.value);
                }}
                id="input-busca"
                placeholder="Digite um usuário do Github"
              />
              <img
                src={iconeBusca}
                alt="logo github"
                id="icone-busca"
                onClick={buscaUsuario}
              />
            </div>

            {loading && (
              <div className="elemento loading">
                  <p>Carregando...</p>
                  {/* Ou um spinner bonito, tipo um ícone animado */}
              </div>
            )}

            {buscou &&
              (respostaUsuario ? (
                <div className="elemento">
                  <img src={userData.avatar_url} alt="" id="imagem-elemento" />
                  <div className="texto-elemento">
                    <h5>{userData.name}</h5>
                    <p>{userData.bio}</p>
                  </div>
                </div>
              ) : (
                <div className="elemento">
                  <p id="elemento-nao-encontrado">
                    Nenhum perfil foi encontrado com ese nome de usuário. Tente
                    novamente
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
}

export default RetanguloPrincipal