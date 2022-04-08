<template>
  <div class="trailer">
    <div class="peliculas-recomendadas container">
      <div class="container-titulo-controles">
        <h3>Trailers Disponibles</h3>
      </div>

      <div class="cards">
        <div v-for="item in arrayMovies" style="width: 300px;" :key="item.id">
          <router-link :to="`/about/${item.id}`">
            <Card
              style="width: 300px; height: 480px;"
              class="card"
              :titulo="item.Nombre"
              :comentario="item.Comentario"
              :imagen="item.Imagen"
              :trailer="item.Trailer"
              :actores="item.Actores"
              :fecha="item.Fecha"
              :director="item.Director"
            />
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Trailers",
  components: {
    Card,
  },
  data() {
    return {
      arrayMovies: [],
    };
  },
  methods: {
    async consumirApi() {
      try {
        const response = await fetch("https://fastapi-crud-final.herokuapp.com/Peliculas/Lista");
        const array = await response.json();
        console.log(array);
        this.arrayMovies = array;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirApi();
  },
};
</script>

<style scoped>
.container-titulo-controles {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.container-titulo-controles h3 {
  color: #fff;
  margin-left: 37%;
  font-size: 30px;
}

.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 40px;
    margin-top: 20px;
}

.card{
    width: 300px;
    height: 480px;
    overflow: hidden;
}

</style>