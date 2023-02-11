import Story from "./Story"

const perfilStory = [
    {imagem: "assets/9gag.jpg" , nome: "9gag"},
    {imagem: "assets/meowed.jpg" , nome: "meowed"},
    {imagem: "assets/barked.jpg" , nome: "barked"},
    {imagem: "assets/nathan.jpg" , nome: "nathanwpyle"},
    {imagem: "assets/wawawiwa.jpg" , nome: "wawawiwac"},
    {imagem: "assets/respondeai.jpg" , nome: "respondeai"},
    {imagem: "assets/ole.png" , nome: "oledobrasil"},
    {imagem: "assets/filomoderna.jpg" , nome: "filomoderna"},
    {imagem: "assets/memeriagourmet.jpg" , nome: "memeriagourmet"}
];

export default function Stories (){
    return (
        <div class="stories">
            {perfilStory.map((s) => <Story imagem ={s.imagem} nome ={s.nome}/>)}

            {/* <ion-icon class="seta" name="chevron-forward-circle"></ion-icon> */}
        </div>
    )
};


