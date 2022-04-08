<template>
  <div class="input-group mb-3" style="width: 400px; margin-left: 20px; margin-top: 10px">
    <input
      type="text"
      class="form-control"
      placeholder="Id"
      v-model="dato.id"
      aria-describedby="basic-addon2"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" @click="Eliminar">
        Eliminar
      </button>
    </div>

  </div>
    <Volver/>
</template>

<script>
import Volver from "../components/Volver.vue";
export default {
  name: "Eliminar",
  components: {
      Volver
  },
  data() {
    return {
      dato: {
        id: 0,
      },
    };
  },
  methods: {
    async EnviarDatos(url, metodo, data) {
      await fetch(url, {
        method: metodo,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.text())
        .then((r) => {
          console.log(r);
        });
      return false;
    },
    async Eliminar() {
      const response = await fetch(`https://fastapi-crud-final.herokuapp.com/Peliculas/Lista`);
      const array = await response.json();
      const x = await array.find((item) => item.id == this.dato.id);
      await this.EnviarDatos(
        "https://fastapi-crud-final.herokuapp.com/Peliculas/Eliminar",
        "DELETE",
        x
      );
      this.$router.push("/admin");
    },
  },
};
</script>


<style>
</style>