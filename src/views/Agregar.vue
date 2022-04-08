<template>
  <div class="col-auto p-3">
            <Volver/>
    </div>

    <div class="w-25 p-3">

        <h5>Titulo</h5>
        <input v-model="pelicula.Nombre" type="text" class="form-control">

        <h5>Año</h5>
        <input v-model="pelicula.Fecha" type="text" class="form-control">
        <br>

        <h5>Comentario</h5>
        <input v-model="pelicula.Comentario" type="text" class="form-control">
        <br>

        <h5>Actores</h5>
        <input v-model="pelicula.Actores" type="text" class="form-control">
        <br>

        <h5>Director</h5>
        <input v-model="pelicula.Director" type="text" class="form-control">
        <br>

        <h5>Trailer link</h5>
        <input v-model="pelicula.Trailer" type="text" class="form-control">

        <h5>Imagen link</h5>
        <input v-model="pelicula.Imagen" type="text" class="form-control">


        <button @click="guardar" style="margin-top:10px;" class="btn btn-outline-dark">Guardar</button>
    </div>
</template>

<script>
import Volver from "../components/Volver.vue";
export default {
    name: "Agregar",
    data() {
        return {
            pelicula: {id: 0, Nombre: "", Fecha: "", Comentario: "", Actores: "", Director: "", Trailer: "", Imagen: ""},
        }
    },
    components: {
        Volver
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
    async guardar() {
            if(this.pelicula.Nombre == "" || this.pelicula.Fecha == "" || this.pelicula.Comentario == "" || this.pelicula.Actores == "" || this.pelicula.Director == "" || this.pelicula.Trailer == "" || this.pelicula.Imagen == ""){
                alert("No puede dejar campos vacios");
            }else{
                await this.EnviarDatos(`https://fastapi-crud-final.herokuapp.com/Peliculas/Agregar`, 'POST', this.pelicula);
                this.$router.push("/admin");
            }
        },
    }
}
</script>

<style scoped>
    .btn{
        margin-left: 1px;
    }
</style>