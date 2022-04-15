<template>
  <body>
	<div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<a href="#" target="_blank"><img :src="imagen" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="movie-title">{{titulo}}</h4>
					<p class="fecha"> Año: {{fecha}} </p>
					<p class="ticket__current-price directorT">Director:</p>
					<p class="ticket__old-price director" >{{director}}</p>
				</div>
			</div>
		</div>
	</div>
</body>
</template>

<script>
export default {
    name:"Card",
    props: {
        titulo: String,
        imagen: String,
        fecha: String,
        comentario: String,
        director: String
    },
    computed: {
        fondo() {
            return `background-image: url(${this.imagen}); 
                    background-size: cover; 
                    background-repeat: no-repeat;
                    background-size: 50% 50%;`;
        }
    },
}
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	background: transparent;
	font-family: "Roboto", sans-serif;
	display: flex;
	height: 80vh;
}

.hero-container {
	width: 300px;
    height: 480px;
}

.main-container {
	width: 300px;
    height: 480px;
	position: relative;
	margin: 0 20px;
}

.poster-container {
	width: 230px;
	position: absolute;
	top: 0;
	left: 20px;
	z-index: 9999;
}

.poster {
	width: 100%;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}

.ticket-container {
	background: #fff;
	width: 270px;
	height: 459px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
	opacity: 0;
}

.main-container:hover .ticket-container {
	opacity: 1;
	animation: bounceIn 0.6s linear;
}

@keyframes bounceIn {
	0%,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	20% {
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}
	40% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9);
		transform: scale3d(0.9, 0.9, 0.9);
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.01, 1.01, 1.01);
		transform: scale3d(1.01, 1.01, 1.01);
	}
	80% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97);
	}
	to {
		opacity: 1;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
}


.ticket__content {
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
}

.movie-title {
	text-transform: uppercase;
	margin-bottom: 5px;
}

.fecha {
	color: #999;
	font-size: 0.9rem;
	margin-bottom: 10px;
}

.directorT {
	color: #69c982;
	font-size: 1.4rem;
	font-weight: bold;
}

a{
	width: 300px;
    height: 480px;
}

.director {
	color: #999;
	margin-bottom: 10px;
}
</style>