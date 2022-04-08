<template>
  <div class="col-auto p-3">
            <Volver/>
    </div>

    <div class="input-group mb-3" style="width: 400px; margin-left: 20px; margin-top: 10px">
    <input
      type="text"
      class="form-control"
      placeholder="Id"
      v-model="pelicula.id"
      aria-describedby="basic-addon2"
      id="buscar"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" @click="cargarDatos">
        Buscar
      </button>
    </div>

  </div>

    <div class="w-25 p-3">

        <h5>Titulo</h5>
        <input v-model="pelicula.Nombre" id="Nombre" type="text" class="form-control">

        <h5>Año</h5>
        <input v-model="pelicula.Fecha" id="Fecha" type="text" class="form-control">
        <br>

        <h5>Comentario</h5>
        <input v-model="pelicula.Comentario" id="Comentario" type="text" class="form-control">
        <br>

        <h5>Actores</h5>
        <input v-model="pelicula.Actores" id="Actores" type="text" class="form-control">
        <br>

        <h5>Director</h5>
        <input v-model="pelicula.Director" id="Director" type="text" class="form-control">
        <br>

        <h5>Trailer link</h5>
        <input v-model="pelicula.Trailer" id="Trailer" type="text" class="form-control">

        <h5>Imagen link</h5>
        <input v-model="pelicula.Imagen" id="Imagen" type="text" class="form-control">


        <button class="btn btn-outline-dark" style="margin-top: 15px;" @click="Actualizar">Actualizar</button>
    </div>
</template>

<script>
export default {
    name: "Actualizar",
    data() {
        return {
            pelicula: {id: 0, Nombre: "", Fecha: "", Comentario: "", Actores: "", Director: "", Trailer: "", Imagen: ""},
        }
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
        async cargarDatos() {

            const response = await fetch(`https://fastapi-crud-final.herokuapp.com/Peliculas/Lista`);
            const array = await response.json();
            const x = await array.find((item) => item.id == this.pelicula.id);
            

            document.getElementById('Nombre').value = x.Nombre;
            document.getElementById('Fecha').value = x.Fecha;
            document.getElementById('Comentario').value = x.Comentario;
            document.getElementById('Actores').value = x.Actores;
            document.getElementById('Director').value = x.Director;
            document.getElementById('Trailer').value = x.Trailer;
            document.getElementById('Imagen').value = x.Imagen;

        },
        async Actualizar() {
            if(this.pelicula.Nombre == "" || this.pelicula.Fecha == "" || this.pelicula.Comentario == "" || this.pelicula.Actores == "" || this.pelicula.Director == "" || this.pelicula.Trailer == "" || this.pelicula.Imagen == ""){
                alert("No puede dejar campos vacios");
            }else{
                await this.EnviarDatos(`https://fastapi-crud-final.herokuapp.com/Peliculas/Actualizar`, 'PUT', this.pelicula);
                this.$router.push("/admin");
            }
        },
    }
}
</script>

<style>

</style>