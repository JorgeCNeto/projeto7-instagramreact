
import BarraTopo from "./BarraTopo";
import Stories from "./Stories";
import Feed from "./Feed";
import BarraLateral from "./BarraLateral";

export default function App (){
    return (
        <>
            <BarraTopo />

            <div class="caixa-corpo">
            <div class="conteudo-principal">

                <Stories />

                <Feed fotoPerfil="public/img/mewowed.jpg" nomePerfil="meowed" fotoPost="public/img/gatinho.png" fotoCurtida="public/img/respondeai.jpg" nomeCurtida="respondeai" curtidas="101.523" />
                <Feed fotoPerfil="public/img/barked.jpg" nomePerfil="barked" fotoPost="public/img/lobinho.png" fotoCurtida="public/img/adorable_animals.svg" nomeCurtida="adorable_animals" curtidas="99.159" />
                <Feed fotoPerfil="" nomePerfil="meowed" fotoPost="" fotoCurtida="" nomeCurtida="" curtidas="" />

            </div>

            <BarraLateral />

            </div>
        </>
    )};

   