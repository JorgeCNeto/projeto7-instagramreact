import Sugestao from "./Sugestao"

export default function BarraLateral(){
    return (
        <>
        <div class="profile">
            <img class="foto-profile" src="public/assets/catana.jpg" />
            <div class="profile-text">
                <h1>catanacomics</h1>
                <h2>Catana</h2>
            </div>
        </div>
        <div class="sugestoes">
            <p class="p1">Sugestões para você</p>
            <p class="p2">Ver tudo</p>
        </div>
        <div class="sugestoes-menu">
            <Sugestao imagem="public/assets/badvibes.jpg" nome="bad.vibes.memes"/>
            <Sugestao imagem="public/assets/chibird.jpg" nome="chibirdart"/>
            <Sugestao imagem="public/assets/razoesparaacreditar.jpg" nome="razoesparaacreditar"/>
            <Sugestao imagem="public/assets/adorable_animals.svg" nome="adorable_animals"/>
            <Sugestao imagem="public/assets/smallcats.jpg" nome="smallcutecats"/>
        </div>
        <p class="etc">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p class="etc">
            © 2021 INSTAGRAM DO FACEBOOK
        </p>
        </>
    )
}


