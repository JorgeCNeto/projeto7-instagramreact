export default function Story(props){
    return (
        <div class="story">
            <div class="story-imagem">
                <img class="story-borda" src="pictures/stories_background.jpg" />
                <img class="story-foto" src={props.imagem} />
            </div>
            <p class="story-name">{props.nome}</p>
        </div>
    )
}