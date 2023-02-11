import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";


export default function Corpo(){
    return (

        <div class="caixa-corpo">
        <div class="conteudo-principal">

            <Stories />

            <Posts />

        </div>

        <SideBar />

        </div>
    )
}
