import Post from "./Post"

const postFeitos = [
    {fotoPerfil: "assets/meowed.jpg", nomePerfil: "meowed", fotoPost: "assets/gatinho.png", fotoCurtida: "assets/respondeai.jpg", nomeCurtida: "respondeai", curtidas: "101523"},
    {fotoPerfil: "assets/barked.jpg", nomePerfil: "barked", fotoPost: "assets/lobinho.png", fotoCurtida: "assets/adorable_animals.svg", nomeCurtida: "adorable_animals", curtidas: "99159"},
    {fotoPerfil: "assets/adorable_animals.svg", nomePerfil: "adorable_animals", fotoPost: "assets/bennieandmaple.jpg", fotoCurtida: "assets/barked.jpg", nomeCurtida: "barked", curtidas: "100213"}
]

export default function Posts(){
    return(
        <>
            {postFeitos.map((p) => <Post fotoPerfil={p.fotoPerfil} nomePerfil={p.nomePerfil} fotoPost={p.fotoPost} fotoCurtida={p.fotoCurtida} nomeCurtida={p.nomeCurtida} curtidas={p.curtidas}/>)}
            
        </>
    )
}