import Sugestao from "./Sugestao"

export default function BarraLateral(){
    return (
        <>
        <div class="profile">
            <img class="foto-profile" src="public/img/catana.jpg" />
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
            <Sugestao imagem="public/img/badvibes.jpg" nome="bad.vibes.memes"/>
            <Sugestao imagem="public/img/chibird.jpg" nome="chibirdart"/>
            <Sugestao imagem="public/img/razoesparaacreditar.jpg" nome="razoesparaacreditar"/>
            <Sugestao imagem="public/img/adorable_animals.svg" nome="adorable_animals"/>
            <Sugestao imagem="public/img/smallcats.jpg" nome="smallcutecats"/>
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


