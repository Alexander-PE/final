<template>
  <div class="movie-card">
    <div class="container">
      <a :href="pelicula[5]"><img :src="pelicula[6]"  class="cover"/></a>

      <div class="hero">
        <div class="details">
          <div class="title1">{{pelicula[0]}}</div>
          <div class="title2">Director: {{pelicula[3]}}</div>
          <div class="likes">Actores: {{pelicula[4]}}</div>

          <div class="description">
          <p>
            {{pelicula[2]}}
          </p>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  data() {
    return {
      pelicula: [],
    };
  },
  methods: {
    async consumirApi() {
      try {
        const response = await fetch(`https://fastapi-crud-final.herokuapp.com/Peliculas/Lista`);
        const array = await response.json();
        const x = await array.find(
          (item) => item.id == this.$route.params.id
        );
        this.pelicula.push(x.Nombre);
        this.pelicula.push(x.Fecha);
        this.pelicula.push(x.Comentario);
        this.pelicula.push(x.Director);
        this.pelicula.push(x.Actores);
        this.pelicula.push(x.Trailer);
        this.pelicula.push(x.Imagen);

        // console.log(this.pelicula);

        console.log(x);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.consumirApi();
  },
};
</script>

<style scoped>


@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

* {
  background-color: black;
}

body {
  
  height: 100%;
}


.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #A9A8A3;
  height: 635px;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  width: 880px;
  height: 490px;
  border-radius: 5px;
  position: relative;
}



.hero {
  height: 342px;  
  margin:0;
  position: fixed;
  background: transparent;
  overflow: hidden;
  z-index:1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.cover {
  position: absolute;
  top: 60px;
  left: 40px;
  z-index: 2;
}

.title1{
    color: white;
    font-size: 44px;
    line-height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.title2 {    
    color: #C7C1BA;
    font-size: 23px;    
    font-weight: 300;
    margin-bottom: 15px;
    bottom: 48%;
  }

.details {
  padding: 40px 0 0 280px;
}

.likes{
  bottom: 38%;
  margin-bottom: 15px;
}

.description {
  position: absolute;
  width: 70%;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 15px;
  color: #B1B0AC;
}



img{
  width: 200px;
  height: 300px;
  border-radius: 10px;
}

</style>