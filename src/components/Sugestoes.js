import Sugestao from "./Sugestao"

const sugestoes = [
    {imagem: "assets/badvibes.jpg" , nome: "bad.vibes.memes"},
    {imagem: "assets/chibird.jpg" , nome: "chibirdart"},
    {imagem: "assets/razoesparaacreditar.jpg" , nome: "razoesparaacreditar"},
    {imagem: "assets/adorable_animals.svg" , nome: "adorable_animals"},
    {imagem: "assets/smallcats.jpg" , nome: "smallcutecats"}    
];

export default function Sugestoes(){
    return (
        <div class="sugestoes-menu">
            {sugestoes.map((s) => <Sugestao imagem ={s.imagem} nome ={s.nome}/>)} 
        </div>
    )
}