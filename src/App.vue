<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="logo">movies</router-link>
    <div class="d-flex">

      <router-link
        v-show="$route.name=='Home' || $route.path.includes('/about')"
        to="/login"
        class="btn btn-dark"
        >Log In</router-link>

    </div>
    
  </div>
  <router-view />
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      arr: ['Admin', 'Eliminar', 'Actualizar', 'Agregar'],
    }
  },
};
</script>

<style>

.logo {
  margin-left: 10px;
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  font-size: 1.5em;
  margin-left: 30px;
  color: red;
}

.logo:hover {
  color: red;
}

.navbar {
  height: 80px;
}

.btn {
  margin-right: 30px;
  font-size: 15px;
}
</style>
