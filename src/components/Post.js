export default function Post (props) {
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
            <img class="foto" src={props.fotoPost}/>
          </div>
          <div class="baixo-feed">
            <div class="icones-feed">
              <div class="icones-esq-feed">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <ion-icon name="bookmark-outline"></ion-icon>
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