export default function Sugestao(props){
    return (
        <div class="potencial">
            <div>
                <img src={props.imagem} />
                <div>
                <h1>{props.nome}</h1>
                <h3>Segue você</h3>
                </div>
            </div>
            <p class="seguir">Seguir</p>
        </div>
    )
}

