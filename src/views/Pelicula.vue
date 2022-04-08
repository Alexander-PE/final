<template>
  <div class="movie-card">
    <div class="container">
      <a :href="pelicula[5]"><img :src="pelicula[6]"  class="cover"/></a>

      <div class="hero">
        <div class="details">
          <div class="title1">{{pelicula[0]}}</div>
          <div class="title2">Director: {{pelicula[3]}}</div>
          <div class="likes">Actores: {{pelicula[4]}}</div>
        </div>

        <div class="description">
        <div class="column2">
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
  position: relative;
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
    margin-bottom: 13px;
    position: relative;
}

.title2 {    
    color: #C7C1BA;
    font-size: 23px;    
    font-weight: 300;
    position: absolute;
    bottom: 58%;
  }

.details {
  padding: 50px 0 0 280px;
}

.likes{
  position: absolute;
  bottom: 47%;
}

.description {
  position: absolute;
  bottom: 15%;
  left: 26%;
  font-size: 16px;
  line-height: 26px;
  color: #B1B0AC;
}


.column2 {
  padding-left: 41px;
  margin-left: 15px;
  float: left;
}

img{
  width: 200px;
  height: 300px;
  border-radius: 10px;
}

</style>