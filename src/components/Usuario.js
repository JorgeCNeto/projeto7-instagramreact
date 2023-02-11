import React from 'react'

export default function Usuario(){
    const [nomeUsuario, setNomeUsuario] = React.useState("catanacomics")
    const [fotoUsuario, setFotoUsuario] = React.useState("assets/catana.jpg")

    function mudancaNome(){
        const novoNome = prompt ("Qual o seu nome?")
        if(novoNome !== ""){
            setNomeUsuario(novoNome)
        }
    }

    function mudancaFoto(){
        const novaFoto = prompt ("Qual o foto deseja?")
        if(novaFoto !== ""){
            setFotoUsuario(novaFoto)
        }
    }

    return (
        <div class="profile">
            <img onClick={mudancaFoto} class="foto-profile" src={fotoUsuario} />
            <div class="profile-text">
                <h1>{nomeUsuario}</h1>
            </div>
            <img onClick={mudancaNome} class="lapis" src="assets/pencil.png" />
        </div>
    )
}

