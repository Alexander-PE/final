<template>
    <div class="poster">

        <div class="container">
            <h3 class="titulo">Harry Potter y las reliquias de la muerte II</h3>
            <p class="descripcion">Harry, Ron y Hermione compiten contra el tiempo para destruir los Horrocruxes restantes. Mientras tanto, los estudiantes y profesores se unen para defender Hogwarts contra Lord Voldemort y los mortífagos.</p>
            
            <a href="https://www.youtube.com/watch?v=M1me0fEgYxY" target="_blank" class="boton"><i class="bi bi-play-fill"></i>Reproducir</a>
            <router-link class="boton" to="/about/2"><i class="bi bi-info-circle"></i>Informacion</router-link>
        </div>

     </div>
</template>

<script>
export default {
    name: 'Poster',
}
</script>

<style scoped>
  .poster{
      background-image: linear-gradient(rgba(0, 0, 0, .50) 0% , rgba(0,0,0, .50) 100%), url(https://i.blogs.es/40f70e/harry-potter/1366_2000.jpeg);
      height: 550px;
      background-size: 100% 110%;
      background-repeat: no-repeat;
      color: white;
      display:flex;
      align-items: end;
      margin-bottom: 3.12em;
      padding-bottom: 55px;
      font-size: 16px;
  }

  .poster .titulo{

	font-weight: 600;
	font-size: 3.12em;
	margin-bottom: 0.4em;
    
}

.poster .descripcion {
	font-weight: normal;
	font-size: 1em;
	line-height: 1.75em;
	max-width: 50%;
	margin-bottom: 1.25em;
}

.poster .boton {
	background: rgba(0,0,0, 0.5);
	border: none;
	border-radius: 0.31em;
	padding: 10px 15px;
	color: #fff;
	margin-right: 1.25em;
	cursor: pointer;
	transition: .3s ease all;
	font-size: 1.12em;
}

.poster .boton:hover {
	background: #fff;
	color: #000;
}

.poster .boton i {
	margin-right: 10px;
}


</style>