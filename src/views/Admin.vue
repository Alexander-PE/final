<template>
  <div class="container">
    <br />
        <h2 class="text-center" id="a"><b>Acciones</b></h2>
    <br />

    <div class="d-grid gap-3 d-md-block col-6 mx-auto">
        <router-link to="/agregar" class="btn btn-warning btn-lg">Agregar</router-link>
        <router-link to="/Actualizar" class="btn btn-success btn-lg">Actualizar</router-link>
        <router-link to="/Eliminar" class="btn btn-danger btn-lg">Eliminar</router-link>
    </div>

    <table class="table table-dark table-striped" style="margin-top: 20px;">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Director</th>
                </tr>
            </thead>
            <tbody id="TDatos">
                
                <tr v-for="item in arr" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.Nombre}}</td>
                    <td>{{item.Fecha}}</td>
                    <td>{{item.Director}}</td>
                </tr>
            </tbody>
        </table>

    

  </div>
</template>

<script>
export default {
    name: 'Admin',
    data() {
        return {
            arr: []
        }
    },
    methods: {
        async consumirApi() {
      try {
        const response = await fetch("http://127.0.0.1:8000/Peliculas/Lista");
        const array = await response.json();
        console.log(array);
        this.arr = array;
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
#a {
  margin-left: -60px;
}

a{
    margin-left: 70px;
}
</style>