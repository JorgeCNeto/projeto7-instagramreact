
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

                <Feed />
                <Feed />

            </div>

            <BarraLateral />

            </div>
        </>
    )};

   