import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"


export default function SideBar(){
    return (
        <div class="sidebar">

            <Usuario />
            
            <div class="sugestoes">
                <p class="p1">Sugestões para você</p>
                <p class="p2">Ver tudo</p>
            </div>
            
            <Sugestoes />

            <p class="etc">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p class="etc">
                © 2021 INSTAGRAM DO FACEBOOK
            </p>
        </div>
    )
}


