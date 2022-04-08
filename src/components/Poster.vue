<template>
    <div class="poster">

        <div class="container">
            <h3 class="titulo">Baby: el aprendiz del crimen</h3>
            <p class="descripcion">Baby es un chofer especializado en fugas que, enamorado, pretende dejar la vida criminal y empezar de cero con la mujer que ama. Cuando el jefe de una banda de gánsters le obliga a trabajar para él y la operación fracasa, su vida y la de su chica pasan a estar en peligro.</p>
            
            <a href="https://www.youtube.com/watch?v=D9YZw_X5UzQ" class="boton"><i class="bi bi-play-fill"></i>Reproducir</a>
            <router-link class="boton" to="/about/1"><i class="bi bi-info-circle"></i>Informacion</router-link>
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
      background-image: linear-gradient(rgba(0, 0, 0, .50) 0% , rgba(0,0,0, .50) 100%), url(../assets/Poster.jpg);
      height: 550px;
      background-size: 100% 100%;
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