import React from 'react'

export default function Post (props) {
  const [salvarFoto, setSalvarFoto] = React.useState("bookmark-outline") 
  const [like, setLike] = React.useState("heart-outline")
  const [color, setColor] = React.useState("")
  
  function salvamento(){
    if (salvarFoto === "bookmark-outline"){
      setSalvarFoto("bookmark")
    }else {
      setSalvarFoto("bookmark-outline")
    }
  }

  function gostei(){
    if (like === "heart-outline"){
      setLike("heart")
      setColor("danger")
    }else {
      setLike("heart-outline")
      setColor("")
    }    
  }

  function gosteiFoto(){
    setLike("heart")
    setColor("danger")
  }

  return (
        <div class="feed">
          <div class="cabeca">
            <div class="nome">
              <div>
                <img class="nome-foto" src={props.fotoPerfil} />
              </div>
              <h1>{props.nomePerfil}</h1>
            </div>
            <div>
                <ion-icon class="reticen"  name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div class="caixa-foto">
            <img onDoubleClick={gosteiFoto} class="foto" src={props.fotoPost}/>
          </div>
          <div class="baixo-feed">
            <div class="icones-feed">
              <div class="icones-esq-feed">
                <ion-icon onClick={gostei} color={color} name={like}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              { <ion-icon onClick={salvamento} name={salvarFoto}></ion-icon> }
            </div>
            <div class="curtidas">
              <img src={props.fotoCurtida} />
              <p>
                Curtido por <strong>{props.nomeCurtida}</strong> e&nbsp;
                <strong>outras {props.curtidas} pessoas</strong>
              </p>
            </div>
          </div>
        </div>

    )
};