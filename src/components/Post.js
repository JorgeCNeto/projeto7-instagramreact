import React from 'react'

export default function Post (props) {
  const [salvarFoto, setSalvarFoto] = React.useState("bookmark-outline") 
  const [like, setLike] = React.useState("heart-outline")
  const [color, setColor] = React.useState("")
  const [curtidas, setCurtidas] = React.useState(props.curtidas)
    
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
      setCurtidas(Number(curtidas) + 1)      
    } else {
      setLike("heart-outline")
      setColor("")
      setCurtidas(Number(curtidas) - 1)      
    }    
  }

  function gosteiFoto(){
    setLike("heart")
    setColor("danger")
    if(like === "heart-outline"){
      setCurtidas(Number(curtidas) + 1)
    }   
  }

  return (
        <div class="feed" data-test="post">
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
            <img onDoubleClick={gosteiFoto} class="foto" src={props.fotoPost} data-test="post-image"/>
          </div>
          <div class="baixo-feed">
            <div class="icones-feed">
              <div class="icones-esq-feed">
                <ion-icon onClick={gostei} color={color} name={like} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              { <ion-icon onClick={salvamento} name={salvarFoto} data-test="save-post"></ion-icon> }
            </div>
            <div class="curtidas">
              <img src={props.fotoCurtida} />
              <p data-test="likes-number">
                Curtido por <strong>{props.nomeCurtida}</strong> e&nbsp;
                <strong>outras {curtidas} pessoas</strong>
              </p>
            </div>
          </div>
        </div>

    )
};