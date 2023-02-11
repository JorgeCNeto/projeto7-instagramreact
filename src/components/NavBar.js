export default function NavBar(){
 return (
    <div class="barra-topo">
        <div class="barra-principal">
        <div class="logos">
            <div class="logo">
            <ion-icon class="iconeInstagram" name="logo-instagram"></ion-icon>
            </div>
            <img class="insta" src="assets/logo.png" alt="instragram"/>
        </div>
        <div class="pesquisar">
            <input placeholder="Pesquisar" />
        </div>
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
        </div>
    </div>
  )};